const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v1";
const assets = [
  "/index.html",
  //fonts
  //   "https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap",
  //   "https://fonts.googleapis.com/css2?family=Bungee&display=swap",
  //   "https://fonts.googleapis.com/css2?family=Krona+One&family=Roboto:ital,wght@0,300;0,400;0,500;1,400;1,500;1,700&display=swap",
];

// install service worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("chaching shell assets");
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      console.log("activate event");
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName && key !== dynamicCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => {
        console.log("fetch event");
        return (
          cacheRes ||
          fetch(e.request).then((fetchRes) => {
            return caches.open(dynamicCacheName).then((cache) => {
              cache.put(e.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      })
  );
});
