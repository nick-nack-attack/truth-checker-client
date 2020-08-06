/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

// eslint-disable-next-line no-undef
importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// eslint-disable-next-line no-undef
importScripts(
  "/precache-manifest.2740d121fd60be0bc2e18400edbf0e92.js"
);

// eslint-disable-next-line no-restricted-globals
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    // eslint-disable-next-line no-restricted-globals
    self.skipWaiting().then(r => console.log(r));
  }
});

// eslint-disable-next-line no-undef
workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
// eslint-disable-next-line no-restricted-globals
self.__precacheManifest = [].concat(self.__precacheManifest || []);
// eslint-disable-next-line no-undef,no-restricted-globals
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// eslint-disable-next-line no-undef
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
