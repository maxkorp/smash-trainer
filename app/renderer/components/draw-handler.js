const React = require('react');
const { inject, observer } = require('mobx-react');
const gamecube = require('node-gamecube-adapter');
const movements = require('./../../shared/movements');

let nextAnimationFrame;
let start;
let controller;
let inputNode;
let expectedNode;
let frames = [];
let i = 0;
const multiplier = 300 / 230; // roughly max input

@inject('store') @observer
class InputIndicator extends React.Component {
  componentDidMount() {
    this.tryInitController();
    inputNode = document.getElementById('input-indicator');
    expectedNode = document.getElementById('expected-indicator');
  }

  tryInitController() {
    controller = gamecube.init().controllers[0];
    if (!controller) {
      setTimeout(() => this.tryInitController(), 25);
    }
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

      let frame = 1 + parseInt((timestamp - start) / frameLength);
      if (frame >= 60) {
        frame = frame % 60;
        start = timestamp;
      }

      this.updateInputLocation(frame);
      this.updateExpectedLocation(frame);

      nextAnimationFrame = requestAnimationFrame(drawIteration);
    }

    nextAnimationFrame = requestAnimationFrame(drawIteration);

    return null;
  }

  updateInputLocation() {
    if (!inputNode) {
      inputNode = document.getElementById('input-indicator');
      if (!inputNode) {
        return;
      }
    }

    if (!controller) {
      return;
    }

    const x = (controller.buttonState.thumbX - 128) * multiplier;
    const y = (controller.buttonState.thumbY - 128) * -1 * multiplier;
    inputNode.style.transform = `translate3d(${x}px,${y}px,0)`;
  }

  updateExpectedLocation(frame) {
    if (!expectedNode) {
      expectedNode = document.getElementById('expected-indicator');
      if (!expectedNode) {
        return;
      }
    }

    const movement = movements[this.props.store.movement];
    if (!movement) {
      expectedNode.style.transform = `translate3d(0,0,0)`;
      return;
    }

    const frames = movement.frames[frame];
    if (!frames) {
      expectedNode.style.transform = `translate3d(0,0,0)`;
      return;
    }

    expectedNode.style.transform = `translate3d(${frames.x},${frames.y},0)`;
  }

  shouldComponentUpdate(newProps) {
    return (newProps.store.tempo !== this.props.store.tempo) || (newProps.store.movement !== this.props.store.movement);
  }
}

module.exports = InputIndicator;
