const cacheVersion = 'v1';

const cacheAssests = [
    '/index.html',
    '/html/',
    '/js/',
    '/css',
    '/img/'
];


self.addEventListener('install', e => {
    console.log('SW Installed');
    e.waitUntil(
        caches
            .open(cacheVersion)
            .then(c => {
                c.addAll(cacheAssests);
                console.log('Caches Added');
            })
            .then(() => self.skipWaiting())
    );

});
self.addEventListener('activate', e => {
    console.log('SW Activated');

});

self.addEventListener('fetch', e => {
    console.log('Fetched from server')
    e.respondWith(
        fetch(e.request)
            .catch(() => { caches.match(e.request); console.log('Fetched from caches') })
    );
});