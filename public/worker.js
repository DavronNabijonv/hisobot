let CACHE_NAME = "XisobotPWA";
let filesToCache = ['index.html', 'offline.html'];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request)
                    .catch(() => caches.match('offline.html'));
            })
    );
});
