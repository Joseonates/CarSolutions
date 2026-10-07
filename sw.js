// Service worker de Car Solutions · Placa a Placa
// - La app (index.html) se pide primero a internet para recibir siempre la última versión;
//   sin conexión se usa la copia guardada.
// - Íconos, fuentes y librerías (lector de Excel, escáner, imagen de cotización) se guardan
//   la primera vez que se usan y luego funcionan sin internet.
const VERSION = 'placa-v1';
const BASE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './apple-touch-icon.png', './favicon-32.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(BASE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // WhatsApp y otros enlaces externos no se interceptan
  if (url.hostname === 'wa.me') return;

  // La app: primero internet, si falla la copia guardada
  if (req.mode === 'navigate' || (url.origin === location.origin && url.pathname.endsWith('.html'))) {
    e.respondWith(
      fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Lo demás: primero la copia guardada, si no existe se descarga y se guarda
  e.respondWith(
    caches.match(req).then(hit => hit || fetch(req).then(r => {
      if (r && (r.ok || r.type === 'opaque')) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return r;
    }))
  );
});
