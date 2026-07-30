(function () {
  async function inject(id, url) {
    const slot = document.getElementById(id);
    if (!slot) return;
    try {
      const response = await fetch(url + '?v=20260730-menu-borghi', { cache: 'no-store' });
      if (!response.ok) throw new Error(String(response.status));
      slot.innerHTML = await response.text();
    } catch (error) {
      slot.innerHTML = '';
      console.error('Impossibile caricare ' + url, error);
    }
  }
  function markCurrentPage() {
    const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('#site-header .nav-link[href]').forEach(function (link) {
      const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
      if (href === file) link.setAttribute('aria-current', 'page');
    });
  }
  document.addEventListener('DOMContentLoaded', async function () {
    await Promise.all([
      inject('site-header', 'includes/header.html'),
      inject('site-cta-strutture', 'includes/cta-strutture.html'),
      inject('site-footer', 'includes/footer.html')
    ]);
    markCurrentPage();
    document.dispatchEvent(new CustomEvent('shared-components-ready'));
  });
}());
