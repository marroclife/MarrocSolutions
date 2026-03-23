/**
 * Service Worker for Academia Fuzzion Gym
 * Enables offline support, caching, and PWA functionality
 * 
 * To enable: Uncomment the service worker registration in script.js
 */

const CACHE_NAME = 'fuzzion-gym-v1.0.0';
const RUNTIME_CACHE = 'fuzzion-gym-runtime-v1';
const FRAME_CACHE = 'fuzzion-gym-frames-v1';

// Files to cache on install
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/manifest.json',
    '/robots.txt',
    '/sitemap.xml'
];

// Install event - cache essential assets
self.addEventListener('install', event => {
    console.log('Service Worker installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching essential files');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activating...');
    
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME && 
                        cacheName !== RUNTIME_CACHE && 
                        cacheName !== FRAME_CACHE) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }

    // Handle frame images (from /frames/ folder)
    if (url.pathname.includes('/frames/')) {
        event.respondWith(
            caches.open(FRAME_CACHE).then(cache => {
                return cache.match(request).then(response => {
                    if (response) {
                        return response;
                    }
                    
                    return fetch(request).then(response => {
                        // Cache successful responses
                        if (response && response.status === 200) {
                            cache.put(request, response.clone());
                        }
                        return response;
                    }).catch(() => {
                        // Return placeholder if offline
                        return new Response(
                            'Offline - Frame not available',
                            { status: 503, statusText: 'Service Unavailable' }
                        );
                    });
                });
            })
        );
        return;
    }

    // Handle HTML, CSS, JS (cache first, fallback to network)
    if (url.pathname.endsWith('.html') || 
        url.pathname.endsWith('.css') || 
        url.pathname.endsWith('.js') ||
        url.pathname.endsWith('/')) {
        
        event.respondWith(
            caches.open(CACHE_NAME).then(cache => {
                return cache.match(request).then(response => {
                    if (response) {
                        // Update cache in background
                        fetch(request).then(freshResponse => {
                            if (freshResponse && freshResponse.status === 200) {
                                cache.put(request, freshResponse.clone());
                            }
                        });
                        return response;
                    }
                    
                    return fetch(request).then(response => {
                        if (response && response.status === 200) {
                            cache.put(request, response.clone());
                        }
                        return response;
                    });
                });
            })
        );
        return;
    }

    // Handle other requests (network first, fallback to cache)
    event.respondWith(
        fetch(request)
            .then(response => {
                // Cache successful responses
                if (response && response.status === 200) {
                    const cacheName = request.url.includes('api') ? 
                        RUNTIME_CACHE : CACHE_NAME;
                    
                    caches.open(cacheName).then(cache => {
                        cache.put(request, response.clone());
                    });
                }
                return response;
            })
            .catch(() => {
                // Fallback to cache
                return caches.match(request).then(cached => {
                    return cached || new Response(
                        'Offline - Content not available',
                        { status: 503, statusText: 'Service Unavailable' }
                    );
                });
            })
    );
});

// Handle messages from clients
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Background sync for form submissions
self.addEventListener('sync', event => {
    if (event.tag === 'sync-contact-form') {
        event.waitUntil(
            // Queue form submission
            new Promise((resolve, reject) => {
                // Implementation would go here
                resolve();
            })
        );
    }
});

console.log('Service Worker loaded');
