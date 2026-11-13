/* Barefoot NT TV Guide: lifecycle only; no cached schedules or app pages. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
