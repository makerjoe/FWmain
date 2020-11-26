var cacheName = 'FW7PWA';
var filesToCache = [
  '/FWmain',
  '/FWmain/index.html',
  '/FWmain/framework7/css/framework7.bundle.css',
  '/FWmain/css/style.css',
  '/FWmain/js/main.js',
  '/FWmain/js/app.js',
  '/FWmain/pages/about.html',
  '/FWmain/pages/form.html',
  '/FWmain/framework7/js/framework7.bundle.js'

];

/* Start the service worker and cache all of the apps content */
self.addEventListener('install', function(e) {
  console.log('Start the service worker and cache all of the apps content')
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  console.log('Serve cached content when offline')
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
