const cacheVersion = 'V3';

const cacheAssests = [
    '/',
    '/index.html',
    '/img/logo.svg',
    '/img/icon/login.svg',
    '/img/icon/about.svg',
    '/img/icon/events.svg',
    '/img/icon/gallery.svg',
    '/img/icon/member.svg',
    '/img/icon/subjects.svg',
    '/js/main.js',
    '/dev/footer.js',
    '/js/loader.js',
    '/css/main.css'
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
    e.respondWith(caches.match(e.request).then(res => {
        return res ||
            fetch(e.request)
    })
        
    );
});