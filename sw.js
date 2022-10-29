self.addEventListener('install', (event) => {
    // Nosotros deberíamos agregar al cache nuestros archivos
    console.info('[SW]: Adicionando nuestros archivos al cache...');

    setTimeout(() = {
        console.warn('[SW]: Se instaló correctamente...');
    }, 1000); // 1 segundo
    self.skipWaiting();
});
self.addEventListener('activate', async (event) => {
    console.info('[SW]: Archivos exitosamente guardados...');
    //event.eaitUntil(clients.claim());
});
self.addEventListener('fetch', (event) => {
    console.info('[SW]: Instalando');
});