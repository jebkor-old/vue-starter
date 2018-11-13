const VERSION = '1.2.13::';

var cacheFirstFiles = [
  // ADDME: Add paths and URLs to pull from cache first if it has been loaded before. Else fetch from network.
  // If loading from cache, fetch from network in the background to update the resource. Examples:
  // 'assets/img/logo.png',
  // 'assets/models/controller.gltf',
];

var networkFirstFiles = [
  './',
  './index.html',
  './dist/main.css',
  './dist/vendor.css',
  './dist/main.min.js',
  './dist/2.min.js',
  './dist/vendor.min.js',
  './manifest.json'
];

// Below is the service worker code.

var cacheFiles = cacheFirstFiles.concat(networkFirstFiles);

self.addEventListener('install', event => {
  console.log('Installing SW...');
  event.waitUntil(
    caches.open(VERSION).then(cache => {
      console.log('SW installed.');
      return cache.addAll(cacheFiles);
    }),
  );
});

self.addEventListener('activate', event => {
  console.log('Activating SW...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => {
            console.log('SW Activated.');
            return;
          })
          .map(cacheName => {
            console.log('SW Activated.');
            return caches.delete(cacheName);
          }),
      );
    }),
  );
});

self.addEventListener('fetch', event => {
  console.log('Fetching cache...');
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log('Cache fetched.');
      return caches.match(event.request);
    }),
  );
});

// // Names of the two caches used in this version of the service worker.
// // Change to v2, etc. when you update any of the local resources, which will
// // in turn trigger the install event again.
// const PRECACHE = '1.2.13::';
// const RUNTIME = 'runtime';

// // A list of local resources we always want to be cached.
// const PRECACHE_URLS = ['','dist/'];

// // The install handler takes care of precaching the resources we always need.
// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(PRECACHE)
//       .then(cache => cache.addAll(PRECACHE_URLS))
//       .then(self.skipWaiting())
//   );
// });

// // The activate handler takes care of cleaning up old caches.
// self.addEventListener('activate', event => {
//   const currentCaches = [PRECACHE, RUNTIME];
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
//     }).then(cachesToDelete => {
//       return Promise.all(cachesToDelete.map(cacheToDelete => {
//         return caches.delete(cacheToDelete);
//       }));
//     }).then(() => self.clients.claim())
//   );
// });

// // The fetch handler serves responses for same-origin resources from a cache.
// // If no response is found, it populates the runtime cache with the response
// // from the network before returning it to the page.
// self.addEventListener('fetch', event => {
//   // Skip cross-origin requests, like those for Google Analytics.
//   if (event.request.url.startsWith(self.location.origin)) {
//     event.respondWith(
//       caches.match(event.request).then(cachedResponse => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }

//         return caches.open(RUNTIME).then(cache => {
//           return fetch(event.request).then(response => {
//             // Put a copy of the response in the runtime cache.
//             return cache.put(event.request, response.clone()).then(() => {
//               return response;
//             });
//           });
//         });
//       })
//     );
//   }
// });

// // console.log('WORKER: executing.');

// // var version = '1.2.13::';

// // var offlineFundamentals = ['', 'dist/'];

// // self.addEventListener('install', function(event) {
// //   console.log('WORKER: install event in progress.');
// //   event.waitUntil(
// //     caches
// //       .open(version + 'fundamentals')
// //       .then(function(cache) {
// //         return cache.addAll(offlineFundamentals);
// //       })
// //       .then(function() {
// //         console.log('WORKER: install completed');
// //       })
// //   );
// // });

// // self.addEventListener('fetch', function(event) {
// //   console.log('WORKER: fetch event in progress.');
// //   if (event.request.method !== 'GET') {
// //     console.log(
// //       'WORKER: fetch event ignored.',
// //       event.request.method,
// //       event.request.url
// //     );
// //     return;
// //   }
// //   event.respondWith(
// //     caches.match(event.request).then(function(cached) {
// //       var networked = fetch(event.request)
// //         .then(fetchedFromNetwork, unableToResolve)
// //         .catch(unableToResolve);

// //       console.log(
// //         'WORKER: fetch event',
// //         cached ? '(cached)' : '(network)',
// //         event.request.url
// //       );

// //       return cached || networked;

// //       function fetchedFromNetwork(response) {
// //         var cacheCopy = response.clone();

// //         console.log('WORKER: fetch response from network.', event.request.url);

// //         caches
// //           .open(version + 'pages')
// //           .then(function add(cache) {
// //             return cache.put(event.request, cacheCopy);
// //           })
// //           .then(function() {
// //             console.log(
// //               'WORKER: fetch response stored in cache.',
// //               event.request.url
// //             );
// //           });

// //         return response;
// //       }

// //       function unableToResolve() {
// //         console.log('WORKER: fetch request failed in both cache and network.');

// //         return new Response('<h1>Service Unavailable</h1>', {
// //           status: 503,
// //           statusText: 'Service Unavailable',
// //           headers: new Headers({
// //             'Content-Type': 'text/html'
// //           })
// //         });
// //       }
// //     })
// //   );
// // });

// // self.addEventListener('activate', function(event) {
// //   console.log('WORKER: activate event in progress.');

// //   event.waitUntil(
// //     caches
// //       .keys()
// //       .then(function(keys) {
// //         return Promise.all(
// //           keys
// //             .filter(function(key) {
// //               return !key.startsWith(version);
// //             })
// //             .map(function(key) {
// //               return caches.delete(key);
// //             })
// //         );
// //       })
// //       .then(function() {
// //         console.log('WORKER: activate completed.');
// //       })
// //   );
// // });
