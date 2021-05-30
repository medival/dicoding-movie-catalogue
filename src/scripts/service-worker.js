/* eslint-disable no-restricted-globals */

const { default: CacheHelper } = require('./utils/cache-helper');

const { assets } = global.ServiceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  self.addEventListener(CacheHelper.revalidateCache(event.reqeuest));
});
