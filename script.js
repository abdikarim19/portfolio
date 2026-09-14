(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  const year = document.querySelector('#year');

  if (year) year.textContent = String(new Date().getFullYear());

  if (!toggle || !nav) return;

  const closeNav = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on link click (mobile)
  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => closeNav());
  });

  // Close if clicking outside
  document.addEventListener('click', (e) => {
    const target = e.target;
    if (!nav.classList.contains('open')) return;
    if (target === toggle || toggle.contains(target)) return;
    if (target === nav || nav.contains(target)) return;
    closeNav();
  });

  // Escape closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
})();