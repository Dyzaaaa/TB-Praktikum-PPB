// service-worker.js

const CACHE_NAME = 'catagram-cache';

self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // Add other paths or assets that you want to cache
      ]);
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated...');
  // Remove outdated caches
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Fetching:', event.request.url);
  // Respond with the fetch event
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
