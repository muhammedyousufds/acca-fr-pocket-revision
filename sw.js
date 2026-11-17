const CACHE = "fr-pocket-v3";
const CACHE_PREFIX = "fr-pocket-";
const ROOT = new URL(self.registration.scope);
const FILES = ["", "index.html", "styles.css", "cards.js", "app.js", "manifest.webmanifest", "icon.svg"]
  .map((file) => new URL(file, ROOT).href);

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== ROOT.origin || !requestUrl.pathname.startsWith(ROOT.pathname)) return;

  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match(new URL("", ROOT).href))),
  );
});



