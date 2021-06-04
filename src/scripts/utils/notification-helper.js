/* eslint-disable no-underscore-dangle */
const NotificationHelper = {
  sendNotification({ title, options }) {
    // TODO: Check availability
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    // TODO: check permissions
    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    // TODO: show notification
    this._showNotification({ title, options });
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
