(function () {
  'use strict';

  const VERSION = '20260803-menu-footer-fix';

  async function loadComponent(targetId, url) {
    const target = document.getElementById(targetId);
    if (!target) return;
    try {
      const response = await fetch(`${url}?v=${VERSION}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      target.innerHTML = await response.text();
    } catch (error) {
      console.error(`Errore caricamento ${url}:`, error);
    }
  }

  function setActiveMenuItem() {
    const current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const groups = {
      'borghi.html': ['ranzanico.html','spinone-al-lago.html','monasterolo-del-castello.html','endine-gaiano.html'],
      'dove-dormire.html': ['dormire-ranzanico.html','dormire-spinone.html','dormire-monasterolo.html','dormire-endine-gaiano.html','hotel.html','bed-breakfast.html','case-vacanza.html'],
      'dove-mangiare.html': ['mangiare-ranzanico.html','mangiare-spinone.html','mangiare-monasterolo.html','mangiare-endine-gaiano.html','ristoranti.html','agriturismi.html','trattorie-pizzerie.html'],
      'guide.html': ['cosa-vedere.html','passeggiate.html','natura.html','spiagge-relax.html','sport.html','sapori.html','panorami.html','con-bambini.html','weekend-lago-di-endine.html']
    };

    let activePage = current;
    Object.entries(groups).forEach(([parent, children]) => {
      if (children.includes(current)) activePage = parent;
    });

    document.querySelectorAll('#site-header .nav-link').forEach(link => {
      const href = (link.getAttribute('href') || '').split('#')[0].toLowerCase();
      const isActive = href === activePage;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([
      loadComponent('site-header', 'includes/header.html'),
      loadComponent('site-footer', 'includes/footer.html'),
      loadComponent('site-cta-strutture', 'includes/cta-strutture.html')
    ]);
    setActiveMenuItem();
  });
})();
