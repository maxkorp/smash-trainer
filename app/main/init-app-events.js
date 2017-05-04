const { app } = require('electron');
const openBrowserWindow = require('./open-browser-window');

let executed = false;
module.exports = () => {
  if (executed) {
    return false;
  }
  executed = true;

  app.on('activate', () => {
    openBrowserWindow();
  });

  app.on('window-all-closed', function() {
    if (process.platform !== 'darwin' || options.test) {
      return app.quit();
    }
  });
}
