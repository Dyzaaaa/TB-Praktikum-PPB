// public/service-worker.js

const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/css/App.css',
  '/favicon.ico',
  '/manifest.json',
  'https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=10',
  'https://api.thecatapi.com/v1/breeds',
  'https://api.thecatapi.com/v1/breeds/${breedId}',
  'https://cat-facts12.p.rapidapi.com/Fact',
  'https://wallpaperaccess.com/full/3057721.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});
