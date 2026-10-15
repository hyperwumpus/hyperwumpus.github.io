/* Progressive enhancement: all content and links work without JavaScript. */
(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.textContent = 'Menu +';
    nav.classList.remove('is-open');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? 'Close −' : 'Menu +';
    nav.classList.toggle('is-open', open);
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu(); menu.focus();
    }
  });
  const cards = [...document.querySelectorAll('[data-category]')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  filters.forEach(button => button.addEventListener('click', () => {
    filters.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => { card.hidden = button.dataset.filter !== 'all' && button.dataset.filter !== card.dataset.category; });
    const supporting = document.querySelector('.supporting-projects');
    supporting.hidden = [...supporting.children].every(card => card.hidden);
    const count = cards.filter(card => !card.hidden).length;
    document.querySelector('#filter-status').textContent = count + (count === 1 ? ' project shown.' : ' projects shown.');
  }));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motionButton = document.querySelector('.motion-toggle');
  let paused = reduced.matches;
  try { paused = reduced.matches || localStorage.getItem('hw-pause-motion') === 'true'; } catch (_) {}
  const setMotion = () => {
    document.body.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = paused ? 'Resume motion' : 'Pause motion';
  };
  setMotion();
  motionButton.addEventListener('click', () => {
    paused = !paused;
    setMotion();
    try { localStorage.setItem('hw-pause-motion', String(paused)); } catch (_) {}
  });
  reduced.addEventListener('change', () => { if (reduced.matches) { paused = true; setMotion(); } });
  const hero = document.querySelector('.hero');
  let frame = 0;
  hero.addEventListener('pointermove', event => {
    if (paused || reduced.matches || event.pointerType === 'touch' || frame) return;
    frame = requestAnimationFrame(() => {
      const bounds = hero.getBoundingClientRect();
      hero.style.setProperty('--drift-x', ((event.clientX - bounds.left) / bounds.width - .5) * 24 + 'px');
      hero.style.setProperty('--drift-y', ((event.clientY - bounds.top) / bounds.height - .5) * 18 + 'px');
      frame = 0;
    });
  }, { passive: true });
  hero.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame); frame = 0;
    hero.style.setProperty('--drift-x', '0px');
    hero.style.setProperty('--drift-y', '0px');
  });
})();
