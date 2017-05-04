const {observable, action} = require('mobx');

class Store {
  @observable tempo;
  @observable movement;

  constructor() {
    this.init();
  }

  @action init() {
    this.tempo = 60;
    this.movement = 'perfect-pivot';
  }

  @action setTempo(tempo) {

    let parsedTempo = parseInt(tempo);

    if ((parsedTempo % 1) !== 0) {
      parsedTempo = "";
    }
    else if (parsedTempo < 1) {
      parsedTempo = 0;
    }
    else if (parsedTempo > 60) {
      parsedTempo = 60;
    }

    this.tempo = parsedTempo;
  }

  @action setMovement(action) {
    const movements = ['perfect-pivot'];
    if (!movements.includes(movement)) {
      return new Error(`invalid movement: ${movement}. movement must be one of: \n${movements.join('\n')}\n`);
    }

    this.action = action;
  }
}

module.exports.Store = Store;

module.exports.store = () => {
  window.store = window.store || new Store();
  return window.store;
};
