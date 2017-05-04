const React = require('react');
const { inject, observer } = require('mobx-react');
const gamecube = require('node-gamecube-adapter');

let nextAnimationFrame;
let start;
let controller;
let inputNode;
let expectedNode;
  let frames = [];
  let i = 0;

@inject('store') @observer
class InputIndicator extends React.Component {
  componentDidMount() {
    controller = this.tryInitController();
    inputNode = document.getElementById('input-indicator');
    expectedNode = document.getElementById('expected-indicator');
  }

  tryInitController() {
    // const foundController = gamecube.init().controllers[0];
    // if (!foundController) {
    //   alert('no controller detected, try replugging and then hit ok');
    //   return tryInitController();
    // }
    //
    // return foundController;
  }

  render() {
    if (nextAnimationFrame) {
      cancelAnimationFrame(nextAnimationFrame);
    }

    const frameLength = 1000 / this.props.store.tempo;

    const drawIteration = (timestamp) => {
      if (!start) {
        start = timestamp;
      }

      const frame = 1 + parseInt((timestamp - start) / frameLength);
      frames.push(frame);
      if (frames.length === 10) {
        console.log(frames);
        frames = [];
      }
      this.updateInputLocation(frame);
      this.updateExpectedLocation(frame);

      nextAnimationFrame = requestAnimationFrame(drawIteration);
    }

    nextAnimationFrame = requestAnimationFrame(drawIteration);

    return null;
  }

  updateInputLocation(frame) {
    if (!inputNode) {
      return;
    }

    // if (!controller) {
    //   return;
    // }

    controller = {
      thumbX: frame % 20 * 20 ,
      thumbY: frame % 20 * -20
    }
    inputNode.style.transform = `translate3d(${controller.thumbX}px,${controller.thumbY}px,0)`
  }

  updateExpectedLocation(frame) {
    return {x: 0, y: 0};
  }

  shouldComponentUpdate(newProps) {
    return (newProps.store.tempo !== this.props.store.tempo) || (newProps.store.movement !== this.props.store.movement);
  }
}

module.exports = InputIndicator;
