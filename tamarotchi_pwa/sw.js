const CACHE_NAME = 'tamarotchi-cache-v1';
const FILES_TO_CACHE = [
  './index.html',
  './game.js',
  './style.css',
  // aggiungi qui tutti gli asset: immagini, audio, icone...
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(resp => resp || fetch(event.request))
  );
});