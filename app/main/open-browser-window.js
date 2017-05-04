const { BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;
module.exports = (options = {}) => {
  if (win) {
    return false;
  }

  let windowOpts = {
    width: options.width || 1251,
    height: options.height || 800,
    title: options.title || '',
    minWidth: 1024,
    minHeight: 600,
    webPreferences: {
      subpixelFontScaling: true,
      directWrite: true
    },
    show: true
  };

  win = new BrowserWindow(windowOpts);

  win.on('devtools-opened', win.webContents.send.bind(win.webContents, 'window:toggle-dev-tools', true));
  win.on('devtools-closed', win.webContents.send.bind(win.webContents, 'window:toggle-dev-tools', false));
  win.webContents.on('will-navigate', event => event.preventDefault());

  win.once('closed', () => {
    win = null;
  });

  const indexFile = path.resolve(__dirname, '..', 'static', 'index.html');

  const targetUrl = url.format({
    protocol: 'file',
    pathname: indexFile,
    slashes: true
  });

  win.loadURL(targetUrl);

  return win;
};
