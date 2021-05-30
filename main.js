const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung Service Worker');
    return;
  }

  try {
    await navigator.serviceWorker.register('.service-worker.js');
    console.log('Service Worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};
