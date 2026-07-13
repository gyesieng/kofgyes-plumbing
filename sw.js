const CACHE_NAME = "kofgyes-v1";

const urlsToCache = [
  "/kofgyes-plumbing/",
  "/kofgyes-plumbing/index.html",
  "/kofgyes-plumbing/style.css",
  "/kofgyes-plumbing/script.js",
  "/kofgyes-plumbing/logo.jpg",
  "/kofgyes-plumbing/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
const CACHE_NAME = "kofgyes-plumbing-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./logo.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});