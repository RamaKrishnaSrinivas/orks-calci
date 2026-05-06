const cacheName = 'calc-v1';
const assets = ['./calculator.html']; // Add your actual filenames here

self.addEventListener('install', (e) => {
    e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
