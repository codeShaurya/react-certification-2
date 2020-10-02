const cacheName = "v2";

self.addEventListener("install", (e) => {
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Call Fetch Event
self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // Make copy/clone of response
        const resClone = res.clone();
        // Open cahce
        caches.open(cacheName).then((cache) => {
          // Add response to cache
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then((res) => res))
  );
});
