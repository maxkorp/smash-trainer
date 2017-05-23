const {observable, action} = require('mobx');
const movements = require('./../../shared/movements');

class Store {
  @observable tempo;
  @observable movement;

  constructor() {
    this.init();
  }

  @action init() {
    this.tempo = 60;
    this.movement = 'perfectPivotRightToLeft';
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

  @action setMovement(movement) {
    const validMovements = Object.keys(movements);
    if (!validMovements.includes(movement)) {
      console.log(`invalid movement: ${movement}. movement must be one of: \n${validMovements.join('\n')}\n`);
      return new Error(`invalid movement: ${movement}. movement must be one of: \n${validMovements.join('\n')}\n`);
    }

    this.movement = movement;
  }
}

module.exports.Store = Store;

module.exports.store = () => {
  window.store = window.store || new Store();
  return window.store;
};
