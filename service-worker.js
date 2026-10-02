const CACHE_NAME = "photos-mariage-v1";

const FICHIERS_A_METTRE_EN_CACHE = [
  "./",
  "./index.html",
  "./manifest.json"
];


// ======================================
// INSTALLATION
// ======================================

self.addEventListener(
  "install",
  function(event) {

    event.waitUntil(

      caches
        .open(CACHE_NAME)

        .then(function(cache) {

          return cache.addAll(
            FICHIERS_A_METTRE_EN_CACHE
          );

        })

    );

    self.skipWaiting();

  }
);


// ======================================
// ACTIVATION
// ======================================

self.addEventListener(
  "activate",
  function(event) {

    event.waitUntil(

      caches
        .keys()

        .then(function(nomsCaches) {

          return Promise.all(

            nomsCaches.map(
              function(nomCache) {

                if (
                  nomCache !==
                  CACHE_NAME
                ) {

                  return caches.delete(
                    nomCache
                  );

                }

              }
            )

          );

        })

    );

    self.clients.claim();

  }
);


// ======================================
// MODE HORS CONNEXION
// ======================================

self.addEventListener(
  "fetch",
  function(event) {

    /*
     * On ne gère que les requêtes GET.
     *
     * Les uploads de photos ne doivent
     * surtout pas être mis en cache.
     */

    if (
      event.request.method !== "GET"
    ) {

      return;

    }


    event.respondWith(

      fetch(event.request)

        .then(function(reponse) {

          /*
           * Si Internet fonctionne,
           * on renvoie la version réseau.
           */

          return reponse;

        })

        .catch(function() {

          /*
           * Sinon on utilise
           * notre cache local.
           */

          return caches.match(
            event.request
          )

            .then(function(reponseCache) {

              if (reponseCache) {

                return reponseCache;

              }


              /*
               * Pour une navigation,
               * on renvoie index.html.
               */

              if (
                event.request.mode ===
                "navigate"
              ) {

                return caches.match(
                  "./index.html"
                );

              }

            });

        })

    );

  }
);
