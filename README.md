# lazy-loader
Lazy load images using Intersection Observer.

## Installation

```bash
# NPM
npm i @alessandrodias/lazy-loader

# Yarn
yarn @alessandrodias/lazy-loader
```

## Usage:

Replace the `src` attribute from images with the `data-lazy-src` attribute
```html
<img data-lazy-src="path/to/image.jpg">
```

Instantiate the class to lazy load the images
```javascript
import LazyLoader from './js-modules/lazy-loader';

new LazyLoader();
```

### How it works?

The **Intersection Observer** will observe each image with the attribute `data-lazy-src` and whenever they are about to appear on screen, it will set the `src` attribute with the value from the `data-lazy-src` attribute.
