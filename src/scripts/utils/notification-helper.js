/* eslint-disable no-underscore-dangle */
const NotificationHelper = {
  sendNotification({ title, options }) {

    // TODO: Check availability

    // TODO: check permissions

    // TODO: show notification
  },

  _checkAvailability() {
    return !!('Notification' in window);
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistraton = await navigator.serviceWorker.ready;
    serviceWorkerRegistraton.showNotification(title, options);
  },
};

export default NotificationHelper;
