const { app } = require('electron');
const initMenus = require('./init-menus');
const openBrowserWindow = require('./open-browser-window');

app.on('ready', () => {
  initMenus();

  openBrowserWindow();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin' || options.test) {
    return app.quit();
  }
});
