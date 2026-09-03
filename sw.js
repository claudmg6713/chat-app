// Minimal service worker — makes the app installable ("Add to Home Screen").
// Kept intentionally simple: no offline caching of chat data (Firestore
// handles its own sync). This is also the foundation for real push
// notifications later (Firebase Cloud Messaging) — a messaging listener
// can be added here without touching the rest of the app.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Placeholder fetch handler (required for installability on some browsers).
// Just passes requests straight through to the network.
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
