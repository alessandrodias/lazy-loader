import LazyLoader from '@alessandrodias/lazy-loader/src/lazy-loader';

window.addEventListener('load',  () => {
   new LazyLoader(onLoadComplete);

   function onLoadComplete() {
     setTimeout(() => {
       document.getElementById('load-complete').classList.add('show');
     }, 300);
   }
});
