const React = require('react');
const { inject, observer } = require('mobx-react');

@inject('store') @observer
class DisplayPanel extends React.Component {
  render() {
    return null;
  }
}

module.exports = DisplayPanel;
