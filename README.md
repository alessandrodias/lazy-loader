# lazy-loader
Lazy load images using Intersection Observer.

## Installation

```bash
# NPM
npm i @alessandrodias/lazy-loader

# YARN
yarn add @alessandrodias/lazy-loader
```

## Usage:

Replace the `src` attribute from images with the `data-lazy-src` attribute
```html
<img data-lazy-src="path/to/image.jpg">
```

Instantiate the class to lazy load the images
```javascript
import LazyLoader from '@alessandrodias/lazy-loader/src/lazy-loader';

new LazyLoader({
  '100px 0px',
  0.5,
  yourCallbackFunction
});
```

## Settings

| option| type | default |
|---|---|---|
| rootMargin | CSS margin property, e.g. "50px 0px" | 0 |
| threshold | percentage of the target's visibility | null |
| callback | function | null |

## How it works?

The **Intersection Observer** will observe each image with the attribute `data-lazy-src` and whenever they are about to appear on screen, it will set the `src` attribute with the value from the `data-lazy-src` attribute.

It also works for background images. But in this case, you must set the `data-lazy-src` attribute to the element that will have the `background-image` applied to.
