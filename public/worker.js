let CACHE_NAME = "XisobotPWA";
let filesToCache = ['pwaindex.html', 'offline.html'];

self.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            return cache.addAll(filesToCache);
        })
    )
})

self.addEventListener('fetch',(event)=>{
    event.respondWidth(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=>caches.match('offline.html'))
        })
    )
})