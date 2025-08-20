const CACHE_NAME = 'predicaciones-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  // Añade aquí otros recursos estáticos que quieras cachear
];

// Instalación del Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Interceptar solicitudes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Devuelve el recurso desde cache o haz la petición
        return response || fetch(event.request);
      })
  );
});