// service-worker.js
const CACHE_NAME = 'Indian-Area-Units';
const CACHE_ASSETS = [
    'index.html',
    'manifest.json',
    'Maskable512.png',
    'Icon192.png',
    'Screenshot-App.png', // Add the screenshot file to cache
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Caching all assets');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Fetch event to serve cached assets
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
