# Adding a country to the tax pages

How the country pages are built and how to add more. 34 countries were built this way: `be` and `fr` by hand, then `lu pt es ie gb ch dk nl it de fi se pl cz hu` and `at gr sk si hr ro bg ee lv lt cy mt ad ua li us ae` as one parallel fork per country, the second batch run by a coordinator agent. Copy `fr/` as the starting point: it uses every hook, including benefits that can make a tax negative. For a non-euro country, also read `gb/` (GBP) or `dk/` (DKK, communes, `nextStep`). For a country with no inheritance tax, read `se/`.

## How it fits together

| URL | File | Role |
|---|---|---|
| `tax/<cc>/` | `<cc>/index.html` | Wrapper: frames the salary shell with `?country=<cc>` |
| `tax/<cc>/inheritance/` | `<cc>/inheritance/index.html` | Same, for the inheritance shell |
| `tax/index.html` | shell | Salary page UI, chart, tooltips, URL state. Opened directly, it redirects to `tax/be/` (or `?country=`) |
| `tax/inheritance.html` | shell | Inheritance UI. Draws the inputs the country declares |

- `embed.js` (wrappers) reads the country and page from the path, sets the iframe src, and exposes `window.TaxEmbed.update({search, title})` so the framed page keeps the wrapper's address bar in sync.
- `i18n.js` holds `COUNTRIES`, `FLAGS`, `loadCountry(page)`, `pageLink(cc, page, lang)`, `syncUrl()`, `shareUrl()`, `fx()`, and the `FlagTitle` component (the flag menu in each `h1`).
- `loadCountry(page)` loads `<cc>/<page>.strings.js`, then `<cc>/<page>.js`, where `page` is `salary` or `inheritance`. It redirects to the wrapper unless framed (never when framed: under `file://` the wrapper isn't reachable, which would loop).
- Default country is `be` unless the URL says otherwise. There is no saved choice and no geolocation for the country; the language still uses geolocation.
- `currencies.js` (`window.TAX_FX`, built by `update_currencies.py`) stores units per euro only. `TaxI18n.fx(v, from, to)` converts any pair through the euro.

## Money and currencies

- The country sets `currency` (ISO code) on both modules. The `eur`/`eur2` helpers it receives then format that currency; the names stayed for history.
- Locales: nl pages use `nl-BE`, fr pages `fr-BE`. English uses `fr-BE` for EUR (`100 €`) and `en-GB` for every other currency (`zł 3,000`, `kr 54,100`, `£24,533`). `en-PL`, `en-DK` and the like write `3.000 zł` next to `13.7%`, which reads wrong.
- Hand-written amounts in strings must match the formatter in each language. The en-GB style is symbol first with comma thousands. Chromium and Node's ICU disagree for some locales: check in the browser.
- `nextStep` is the "next" step in local money, about 100 €: SEK/DKK 1000, PLN 500, CZK 2500, HUF 40000. The shell scales its euro-sized constants (chart window, search ranges, input steps) by `nextStep / 100`.
- **Display currency:** the `{currency}` menu in the `h1` (and `?currency=`) shows every amount in another currency. The model still runs in the country's currency: `eur`, `eurK` and `sym` convert on the way out, and money inputs convert both ways (`moneyIn`/`moneyOut` in the shells). Pass all money through `eur()`, never format it by hand. A country that overrides `h1` or `inh.h1` must keep both `{flag}` and `{currency}`. Hand-written legal amounts in strings stay in the country's currency.
- **Signs:** `SIGNS` in `i18n.js` disambiguates shared signs (AU$, CA$, HK$, MX$, NZ$, SG$, CN¥; `$` stays the US dollar). Every formatter and the currency menu use it. Add a currency there when its sign collides with another.
- **Switching country** keeps the shared settings (`CARRY` in `i18n.js`: salary, period, household, partner, children, VAT, minister mode; on the inheritance page the amount, relationship, home and gifts). Money goes with `from=<currency>` and is converted on arrival; the page's current values are carried, defaults included. A display currency equal to the country's own is dropped from the URL.
- `update_currencies.py`: ECB reference rates, UAH from the National Bank of Ukraine, AED from its USD peg, and fixed rates for currencies the euro replaced. Add a source there if a new currency is missing.

## How to run a batch

One coordinator, one fork per country, all in parallel. The coordinator owns every shared file; each fork owns only `tax/<cc>/`.

1. **Coordinator, before forking:**
   - Add every `<cc>` to `COUNTRIES` and `FLAGS` in `i18n.js`, and `'country.<cc>'` (en/nl/fr) to `common.strings.js`. Use ISO codes (`gb`, not `uk`).
   - Check `update_currencies.py` covers every new currency, and run it.
   - Fork one agent per country with the brief below. Forks inherit the coordinator's context, so this file should already be read.
2. **Each fork:** research, build, test, report (brief below). It does its own research: no sub-agents.
3. **Coordinator, as forks report:**
   - Read each report for shell problems. They come in early: fix the shell once, then message the forks still running (`SendMessage`) so they don't each work around it.
   - Fold each `build_<cc>(tmpdir)` from the fork's scratchpad into `update_communes.py` as a new mode.
   - Add any colour token a fork asked for to the `:root` blocks of the shell(s), light and dark.
   - Run the test harness on the finished countries (Testing, below).
4. **Commit** only when asked. Check `git status` first: files can be staged from outside the session.

### Fork brief

Give each fork its country, code, currency and `nextStep`, plus what is specific to it (regional taxes, commune levy, no inheritance tax, special regimes). Then the shared rules:

- Touch only `tax/<cc>/`. Never edit the shells, `i18n.js`, `common.strings.js`, `embed.js`, `update_*.py`, this file or another country.
- Research notes go to `<scratchpad>/<cc>/research_*.md`, one row per figure: value, base, condition, source URL, year, confidence.
- Build `salary.js`, `salary.strings.js`, `inheritance.js`, `inheritance.strings.js`, `communes.js` if a commune levy applies, and the two wrappers (copy `fr/`, change only `<title>`).
- Reuse existing `--k-*` / `--r-*` colour tokens. New ones go in the report (name, light hex, dark hex), not in the shell.
- If a commune levy applies: a standalone `build_<cc>(tmpdir) -> str` (returns the `communes.js` text) in `<scratchpad>/<cc>/update_communes_<cc>.py`. Downloads go in their own empty folder; parse with `python3 -I`.
- A shell problem goes to the coordinator by `SendMessage` as soon as it's found, not only in the final report.
- Cross-check a few nets against an official simulator, or a payroll firm when the official one needs a login.
- No commits. No em-dashes in strings.
- Final report, short: files, key figures with confidence, what isn't confirmed, modelling choices to revisit, colour tokens needed, shell hooks used or still missing, test results.

## Research checklist

Use primary sources (tax office, social security, legal texts), cross-check with a payroll firm, and flag what isn't confirmed.

1. **Social contributions**: every employer and employee rate, its base and ceiling. Size thresholds. Low-wage reductions with their exact formula. Regional regimes (France: Alsace-Moselle). Any mid-year change (Ireland: PRSI on 1 October).
2. **Income tax**: brackets for the right income year. Was the budget law enacted for that year, or is it still a bill? (France 2026 income: PLF 2027, labelled as a bill. Spain: extended 2023 budget. Portugal: a retroactive cut authorised but not yet decreed.) Professional-expense deduction, household/family rules (quotient, joint return, splitting), credits, low-tax reliefs, high-income surcharges. Plus in-work benefits that act as negative taxes (France: prime d'activité, UK: Universal Credit, Ireland: Working Family Payment).
3. **Local levy that depends on the commune**, as an official per-commune dataset that can be downloaded and parsed. Belgium: communal surcharge. France: versement mobilité. Portugal: municipal IRS share. Denmark, Sweden, Finland: municipal tax. Italy: addizionale comunale. Switzerland: communal multiplier.
4. **Public pay**: head of government, ministers, MPs, with their tax and social treatment, not only the amounts. Heads of public bodies and state-owned companies, with the year and the current holder. Reference wages: minimum, median and mean gross per month, with year. No statutory minimum (Denmark, Sweden, Italy): leave the line out.
5. **Inheritance**: brackets, allowances by relationship, exemptions (partner, home), recall of past gifts, life insurance, and changes from the latest budget law. Watch for widely repeated amendments that weren't adopted (France: step-children). No inheritance tax (Sweden, Czechia): the page still works, shows 0 and explains what applies instead (Czechia: income tax on some gifts).

### What went wrong or mattered

- **Primary sites often block automated fetches** (Légifrance, urssaf.fr, boss.gouv.fr, SKAT, Revenue detail pages). Fall back to official PDFs and payroll firms, keep a confidence level per figure and a list of what wasn't confirmed. Check those before shipping.
- **Sources disagree, and the newest primary text wins.** France's Agirc-Arrco FAQ still printed the 2025 RGDU parameters; the 2026 decree had newer ones. The Netherlands' draft brackets were replaced in the final law. Report conflicts, don't pick silently.
- **Dataset downloads are untrusted.** Each goes in its own new empty folder, scripts live elsewhere, and parsers run with `python3 -I`.
- **Forks finish at different times** (15 to 45 minutes). Don't poll: notifications arrive on their own.
- **Shell gaps show up in the first reports.** Batch one found: hard-coded €, euro-sized chart constants, `nextStep` not reaching the raise sentence and inheritance tile, bracket rates rounded to whole percents, `7%` printed as `7.00%` from float error, tiles overflowing with long amounts, VAT that depends on the region. All fixed now; expect new ones from countries unlike the previous ones (USA: federal + state + city; UAE: no income tax).
- **Shared server under load:** the CDN (Vue, Chart.js) drops connections with `ERR_NETWORK_CHANGED` when many tests run at once. The harness retries once.
- **Never run `npx playwright install` without `PLAYWRIGHT_HOST_PLATFORM_OVERRIDE=ubuntu24.04-x64` on this machine.** Playwright doesn't support Ubuntu 26.04: the plain install fails after deleting the other cached browsers, which breaks every running test.


## `salary.js` contract

`window.TAX_COUNTRY = ({ t, eur, eur2, num, pct, int, vr, esc, link, sources }) => C`. All rules live inside the factory. `link(k)` and `sources(...ks)` read `C.SRC`.

The model:
- `compute(G, s, env)` takes the annual gross and returns `{ G, cost, net, u, parts, regime? }`. `parts` has one entry per key in `COMP_KEYS` (annual, local currency). A negative part is a benefit received; positive is tax. Include `vat`.
- `env(s)` returns what `compute` needs about the partner (computed once per state change).
- `ROW_DEFS`: `[{ key: 'full'|'work'|'employee', color, set: [part keys], base: 'cost'|'G' }]`. The shell measures each row as average and "next `nextStep`" rates.
- `COMP_KEYS` gives the bar and split-table order; `COMP_COLORS` maps each key to a `var(--k-*)`. `BASE_TIP` is `{ cost: 'cost', G: 'gross' }`.
- `segLabels` / `recvLabels` override the label key when a part is a lost benefit (positive) or a benefit received (negative). France: `pa`.

The inputs:
- `state`: defaults for the country-specific fields, merged over the shell's shared state. Must include `salary`, `factor`, `minRole`, `commune`, `region`, `local`, `vatRate`, `size`.
- `urlFields`: `{ param: [stateKey, 'num'|'str'|'bool', allowed?] }` for those fields. Shared ones (salary, per, household, partner, kids, vat, vatrate, regime) are in the shell.
- `factors` (months-paid options) and `factorDigits`; `regions`, `sizes` and `minRoles` (string keys rendered as `t('region.'+k)` etc.); `vatStandard` (a number, or `region => rate` when a region has its own).
- `features`: `{ under3?, cadre?, pa?, partsHint? }` turn shell blocks on.
- `currency` (ISO code, default `'EUR'`): the `eur`/`eur2` helpers and the input suffixes format with it. `nextStep` (default 100, local currency) is the "next" step on monthly gross.
- `communes: false` drops the commune picker and skips `communes.js`. `local: null` drops the slider. An empty or missing `regions` or `sizes` hides that row.
- `local`: `{ label, tip|null, digits, step, range(list, s) => [min, max], notDue(s), hideInMinister }`. This is the slider for the commune-dependent rate; its value is `s.local`.
- Communes:
  - `parseCommunes(raw)` returns `[{ name, rate, region, sub, id }]`, where `id` is the URL value and `sub` is shown small (France: department).
  - `communeLabel(c)`, `communeTag(c)` (right side of each list row) and `communeHint(c)`.

The page hooks receive `x` = `{ s, cur(), env(), commune(), vatShare(), localRange(), localMax(), firstMonthly(test, lo, hi), fmtM(v, step), perUnit() }`:
- `breakdown(r, x)` returns the full-breakdown lines `[{ op, k, label, v, tax?, cls? }]`, without VAT (the shell appends it). `tax` feeds the cumulative column; negative for reductions.
- `tips(x)` returns `{ tipBuilders, ministerTips }`, where each entry is `key: r => html`. Keys match `v-tip` values: part keys, breakdown `k`s, `factor<n>`, `joint`, `reg`, `size`, `ministerRules`, plus country ones. The shell adds the chips, rows and politicians.
- `trap(x)` returns `{ band: [m0, m1] (monthly gross), text: [...] }` for the low-wage note and the shaded band.
- `top(x)` returns `{ at, text }` or `null` for the top-bracket note. `text` is spread into `t('trapBody')` / `t('topBody')`, so string signatures must match.
- `partsHint?(x)` returns the hint under the children stepper.

Politicians and public pay:
- `POLITICIANS`: `[{ kind: 'stat'|'gov'|'corp', key?|name, role?, regime?, icon?, lo, hi, pub?, note?, url }]`. Entries with a `regime` are placed at the employee gross that nets the same; the others sit at their gross.
- `own(p, plain, env)` returns `{ net, allow }` under the person's own rules.
- `minSalary(role)` gives the yearly pay used in minister mode.
- `polNote(p)`, `polTipNote(p)`, `polSrc(p)` and `polNoteLink` give string keys or labels for the tooltips.

Reference data:
- `REF_WAGES`: `[{ key: 'min'|'med'|'avg', m, year, color }]`, monthly gross.
- `P.brackets` is used for the reference table; `refKeys` lists the `ref.*` sections, each `{ h, li: [html] }`, or a function of the brackets table.
- `SRC`: `{ key: url }`, each with a `'src.<key>'` string.

## `inheritance.js` contract

`window.TAX_INHERIT = ({ t, eur, pct }) => C`:
- `state` and `urlFields`, as above.
- `fields`: `[{ key, id?, type: 'money'|'int'|'seg'|'segCol'|'check'|'stepper', label, hint?, hintIf?(s), show?(s), options?, optLabel?, min?, max?, more? }]`. `more: true` fields go in the collapsible section titled by `t(C.moreLabel)`. Use `id` when two fields share a `key`.
- `compute(s)` returns `{ tax, total, avg, lines: [{ label, amt?, rate?, tax?, cls? }], segs? }`. The shell computes the "next" rate by calling it again with `share + nextStep`.
- `totalLabel` is the label of the total row.
- `compare`: `{ title, head, rows(s) => [{ k, label, color, me, tax, total, avg }] }`. Belgium compares regions, France compares relationships.
- `chart`: `{ xMax, step, yMax, title(s), deps(s), lines(s) => [{ label, color: '--r-…', me, f(x) => avg }] }`.
- `ref()` returns `[{ h?, table?: { head, rows: [{ to, cells: [{ r, txt }] }] }, list?, note? }]`.
- `SOURCES`: `[[key, url]]`.
- `currency` and `nextStep`, as for the salary page (the inheritance step can be larger: Hungary uses 1,000,000 Ft).

## Strings

- `common.strings.js` (`window.TAX_COMMON`) holds everything that reads the same in every country: UI labels, `h1` with its `{flag}` placeholder, `inh.*` keys and `country.*` names. Country files hold only country-specific text and may override a shared key (France overrides `bd.taxable`).
- All three languages (en, nl, fr) are required. Values are strings or functions of their arguments.
- Keep strings files flat (one top-level key per entry) so they stay easy to diff, check for missing keys and move between files. Avoid spreads like `...Object.fromEntries(...)`: use a shared key plus a field on the data (see `note: 'capped'` in `fr/salary.js`).
- Never name a local variable `t` in the pages or modules: it shadows the translator.

## Communes

- One file per country, `<cc>/communes.js` (`window.COMMUNES = [...]`), loaded with a script tag so `file://` works. No JSON copy.
- Keep it compact: France stores `[name, rate, dep]` tuples (~900 KB for 34,746 communes); Belgium stores objects (565 communes).
- The shell renders only the first 150 matches.
- `update_communes.py <cc>` downloads into a temp folder and rewrites the file. After a rebuild, diff it against the previous data. That's how the Belgian rebuild caught Saint-Nicolas (Liège) wrongly mapped to Sint-Niklaas.
- Watch for:
  - repeated names (match each name in the commune's official language)
  - merged communes
  - cities split into arrondissements (Paris, Lyon, Marseille)
  - date ranges (pick the rate in force on a fixed date)

## Modelling pitfalls hit so far

- **The "next" rate is the next `nextStep` a month (about 100 €), not the next unit.** Legal thresholds (benefit phase-outs, ceilings, the RGDU cliff) otherwise show as spikes.
- **Don't round a smooth formula the way payslips do.** The 4-decimal RGDU rounding made the curve saw-toothed for a few euros of accuracy.
- **Real cliffs stay visible on purpose:** the end of the RGDU at 3 SMIC, CET applying to the whole salary above the ceiling, Ireland's USC exemption at €13,000, Luxembourg's inheritance surcharge on the whole share. Explain them in the trap/top notes.
- **For a couple, "your" tax or benefit = the household with your pay − the household without it.** A benefit your pay cancels is a tax. A benefit paid whatever you earn cancels out (Hungary: családi pótlék).
- **Out-of-work benefits** for a single person aren't counted as taken away by the job (France, UK, Netherlands do the same). Keep that consistent.
- **Benefits can push buying power above 100% and rates below 0%.** The chart's y-axis adapts in 5% steps, between −100% and 150%.
- **Insurance-like compulsory items** (mutuelle, prévoyance, group insurance) are left out and listed under "not included".
- **Sub-regimes with sector- or firm-specific exemptions** (France's overseas departments, Spain's foral regimes) are scoped out explicitly rather than half-modelled.
- **No spare shell row for a country option?** Luxembourg (Mutualité class), Portugal (IRS Jovem year) and Hungary (personal exemptions) reused `sizes` or `regions` and overrode the label. It works; keep the label honest.
- **Politicians with their own regime** are placed by a search up to `5e6 × nextStep / 100`. Check they land where expected in non-euro countries.

## Testing

The harness is `tests/run.js`. It serves the repo itself, so it needs no other server:

    cd tax/tests && npm install && node run.js [cc ...] [--only salary|inheritance] [--shots]

- `node strings.js [cc ...]` is the static half: every key the shells, `i18n.js` and the country modules can ask for (literal keys, and keys built from `regions`, `sizes`, `minRoles`, `REF_WAGES`, `ROW_DEFS`, `SRC`, `refKeys`, `POLITICIANS`, `SOURCES`, `fields`) must exist with en, nl and fr. Shell keys tied to a feature (`under3`, `pa`, communes, `local`) are only required when the country turns it on. It runs in a second, so run it yourself; `npm test` runs it before the browser checks.
- Generic labels belong in `common.strings.js`; a country file only overrides them. `polAllow` was missing for every country that didn't define its own.

- With no country it runs every country in `COUNTRIES` that has a `salary.js`. `--shots` writes full-page screenshots to `tests/shots/` (git-ignored).
- **Run it through a Haiku agent** (`model: haiku`), once, and have it report the summary line and every FAIL line. Don't re-run a passing suite.
- Each page opens in a fresh browser context (the saved language leaks otherwise) and fails on any `pageerror` or console error. Per country:
  - salary in en/nl/fr, the minimum wage, a high salary, a couple with children, minister mode in en and fr. Cases are scaled from the module's `REF_WAGES` and `nextStep`.
  - every tooltip hovered; no `NaN`, `undefined`, raw string keys, or tile amounts overflowing.
  - the URL round trip: the value survives, and editing updates the wrapper's address bar.
  - the old `tax/index.html?country=<cc>` link redirects.
  - inheritance in en/nl/fr, clicking every option button.
  - both pages under `file://`.
- Not covered by the harness, check by hand once per country: the flag menu, the share button, and a few nets against an official simulator.
