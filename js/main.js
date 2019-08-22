import LazyLoader from '@alessandrodias/lazy-loader/src/lazy-loader';

window.addEventListener('load',  () => {
  new LazyLoader({
    rootMargin: '50px 0px',
    threshold: 0.3,
    callback: imagesLoaded
  });

  // calback function
  function imagesLoaded() {
    setTimeout(() => {
      document.getElementById('load-complete').classList.add('show');
    }, 300);
  }
});