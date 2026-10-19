// Wrapper for tax/<country>/ and tax/<country>/inheritance/: frames the shared page with the country filled in
// and keeps this URL in sync with it.
(function () {
  const parts = location.pathname.split('/');
  if (parts[parts.length - 1] === '' || parts[parts.length - 1] === 'index.html') parts.pop();
  const page = parts[parts.length - 1] === 'inheritance' ? parts.pop() : 'index';
  const country = parts.pop();
  const q = new URLSearchParams(location.search);
  q.set('country', country);
  const frame = document.getElementById('page');
  frame.src = `${page === 'index' ? '../' : '../../'}${page}.html?${q}${location.hash}`;
  window.TaxEmbed = {
    update({ search, title }) {
      document.title = frame.title = title;
      try { history.replaceState(null, '', location.pathname + (search ? '?' + search : '') + location.hash); } catch (e) {}
    },
  };
})();
