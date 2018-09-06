var serviceWorkerVersion = 1;

self.addEventListener('install', function (event) {
  console.log('[Service Worker] Installing Service Worker ' + serviceWorkerVersion, event);
});

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activating Service Worker ' + serviceWorkerVersion, event);
  // claim() sets this worker as the active worker
  return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  console.log('[Service Worker] Intercepting fetch event with serviceWorker ' + serviceWorkerVersion, event);
  event.respondWith(fetch(event.request));
});