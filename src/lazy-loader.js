require('intersection-observer');

export default class LazyLoader {
  constructor(options) {
    this.observer = null;
    this.images = Array.from(document.querySelectorAll('[data-lazy-src]'));
    this.imagesToLoad = this.images.length;
    this.options = {
      rootMargin: '50px 0px',
      threshold: 0.3,
      callback: null
    };

    this.getCustomOptions(options);
  }

  getCustomOptions(options) {
    if (options) {
      Object.assign(this.options, options);
    }

    this.setupObserver();
  }

  setupObserver() {
    this.observer = new IntersectionObserver(this.onIntersection.bind(this), this.options);

    this.images.forEach(image => {
      this.observer.observe(image);
    });
  }

  onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {

        let imgSrcAttr = entry.target.getAttribute('data-lazy-src');

        this.observer.unobserve(entry.target);
        this.preloadImage(entry.target, imgSrcAttr);
      }
    });
  }

  preloadImage(imageElm, imageSrcAttr) {
    if (imageSrcAttr) {
      return this.fetchImage(imageSrcAttr).then(() => {
        this.applyImageToElement(imageElm, imageSrcAttr);
      });
    }
  }

  fetchImage(imageSrc) {
    return new Promise((onLoad, onError) => {
      let newImage = new Image;
      newImage.src = imageSrc;
      newImage.onLoad = onLoad();
    });
  }

  applyImageToElement(elm, src) {
    if (elm.tagName.toLowerCase() === 'img') {
      elm.src = src;
    } else {
      elm.style.backgroundImage = `url("${src}")`;
    }

    this.checkLoadComplete();
  }

  checkLoadComplete() {
    this.imagesToLoad--;

    if ((this.imagesToLoad < 1) && (typeof this.options.callback === 'function')) {
      this.options.callback();
    }
  }
}
