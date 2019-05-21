const cacheVersion = 'v1';

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
    '/html/',
    '/js/main.js',
    '/js/footer.js',
    '/js/loader.js',
    '/css/main.css',
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
    e.respondWith(caches.match(e.request).then(res => {
        return res ||
            fetch(e.request)
                // .then(console.log('Fetched form server'))
                // .catch(console.log('error fetching..'))
        })
    );
});