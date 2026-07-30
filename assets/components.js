(function () {
  async function inject(id, url) {
    const slot = document.getElementById(id);
    if (!slot) return;
    try {
      const response = await fetch(url + '?v=20260730-territorio-preferiti', { cache: 'no-store' });
      if (!response.ok) throw new Error(String(response.status));
      slot.innerHTML = await response.text();
    } catch (error) {
      slot.innerHTML = '';
      console.error('Impossibile caricare ' + url, error);
    }
  }

  function markCurrentPage() {
    const file = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = Array.from(document.querySelectorAll('#site-header .nav-link[href]'));
    links.forEach(function (link) {
      link.removeAttribute('aria-current');
      link.classList.remove('active');
    });
    const current = links.find(function (link) {
      const href = (link.getAttribute('href') || '').split('#')[0].split('?')[0].toLowerCase();
      return href === file;
    });
    if (current) {
      current.setAttribute('aria-current', 'page');
      current.classList.add('active');
    }
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
