//var CACHE_NAME = 'version-1'; // bump this version when you make changes.
var static_cash_name='site-static-v5.1';
// Put all your urls that you want to cache in this array
var urlsToCache = [
    './index.html',
    './assets/logo-192.png',
    './app.js',
    './ri.js',
    './rdx.js',
    './local.js'
];

// Install the service worker and open the cache and add files mentioned in array to cache
/*
self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open(static_cash_name).then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
        })
    );
});
*/
self.addEventListener('install', async evt => {
  var cache = await caches.open(static_cash_name);
  await cache.addAll(urlsToCache);
  return self.skipWaiting();
})



// keep fetching the requests from the user
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) return response;
            return fetch(event.request);
        })
    );
});

self.addEventListener('activate', function(event) {
    var cacheWhitelist = []; // add cache names which you do not want to delete
    cacheWhitelist.push(static_cash_name);
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
        return Promise.all(
            cacheNames.map(function(cacheName) {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        );
        })
    );
});
