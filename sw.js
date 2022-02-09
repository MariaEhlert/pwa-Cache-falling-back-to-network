let CACHE_NAME = 'my-site-cache';

let urlsToCache = [
    './',
    './assets/css/main.css',
    './assets/images/logo/logo521x521.png',
    './assets/images/logo/logo256x256.png',
    './assets/images/logo/logo192x192.png',
    './assets/images/logo/logo128x128.png',
    './assets/images/logo/logo72x72.png',
    './index.html',
    './info.html',
    './assets/images/n02092339_7210.jpg'
];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

// Cache, falling back to network

// at bygge offline-først. I sådanne tilfælde er det sådan, du vil håndtere de fleste anmodninger. 
// Andre mønstre vil være undtagelser baseret på den indkommende anmodning.

// Dette giver dig "kun cache"-adfærd for ting i cachen og "kun netværk"-adfærd for alt, der ikke er cachelagret 
// (hvilket inkluderer alle ikke-GET-anmodninger, da de ikke kan cachelagres).
self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      }),
    );
  });