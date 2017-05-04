const _ = require('lodash');
const path = require('path');
const events = require('events');
const { BrowserWindow, Menu } = require('electron');

const pkg = require('../package.json');

const emitter = new events.EventEmitter();

const wireUpMenu = (menu, command) => {
  return menu.click = () => emitter.emit(command);
};

const translateTemplate = (template, state) => {
  const outTemplate = [];
  template.forEach((item) => {
    if (item.metadata === null) {
      item.metadata = {};
    }

    if (item.label) {
      item.label = _.template(item.label)(state);
    }

    if (item.submenu) {
      item.submenu = translateTemplate(item.submenu, state);
    }

    if (item.command) {
      wireUpMenu(item, item.command);
    }

    outTemplate.push(item);
  });

  return outTemplate;
};

module.exports = () => {
  const menuJson = path.join(__dirname, 'menus', `${process.platform}.json`);
  const template = require(menuJson); // eslint-disable-line import/no-dynamic-require

  const processedTemplate = translateTemplate(template, pkg);

  const menu = Menu.buildFromTemplate(_.cloneDeep(processedTemplate));
  Menu.setApplicationMenu(menu);

  emitter.on('window:toggle-dev-tools', () => {
    console.log('soiree');
    const focusedWindow = BrowserWindow.getFocusedWindow();
    return focusedWindow && focusedWindow.toggleDevTools();
  });

  return menu;
}
