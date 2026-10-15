(() => {
  'use strict';
  const flip = document.querySelector('.portrait-flip');
  flip.addEventListener('click', () => {
    const showPhoto = flip.getAttribute('aria-pressed') !== 'true';
    flip.setAttribute('aria-pressed', String(showPhoto));
    flip.setAttribute('aria-label',showPhoto ? 'Show HyperWumpus character portrait' : "Show Misael's real photo");
    const front = flip.querySelector('.portrait-front'), back = flip.querySelector('.portrait-back');
    front.setAttribute('aria-hidden',String(showPhoto)); front.inert = showPhoto;
    back.setAttribute('aria-hidden',String(!showPhoto)); back.inert = !showPhoto;
    flip.querySelector('.flip-hint').textContent = showPhoto ? 'Back to HyperWumpus ↻' : 'Meet the person behind HyperWumpus ↻';
  });
  const leadDrawer = document.querySelector('#leadflow-demo');
  document.querySelector('a[href="#leadflow-demo"]').addEventListener('click',() => {leadDrawer.open = true;});
  document.querySelectorAll('[data-load-project]').forEach(button => button.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = button.dataset.loadProject;
    frame.title = button.dataset.frameTitle;
    frame.loading = 'lazy';
    frame.sandbox = 'allow-scripts allow-same-origin allow-downloads';
    button.parentElement.querySelector('.project-embed-slot').replaceChildren(frame);
    button.hidden = true;
  }));
  const viewer = document.querySelector('#artwork-viewer');
  if (viewer && typeof viewer.showModal === 'function') {
    let previousFocus = null;
    document.querySelectorAll('.zoom-art').forEach(link => link.addEventListener('click', event => {
      event.preventDefault(); previousFocus = link;
      const source = link.querySelector('img');
      viewer.querySelector('img').src = source.src;
      viewer.querySelector('img').alt = source.alt;
      viewer.showModal();
    }));
    viewer.querySelector('button').addEventListener('click', () => viewer.close());
    viewer.addEventListener('close', () => previousFocus?.focus());
  }
})();
