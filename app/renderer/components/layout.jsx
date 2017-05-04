const React = require('react');
const { inject, observer } = require('mobx-react');

const DisplayPanel = require('./display-panel');
const ControlPanel = require('./control-panel');

@observer
class Layout extends React.Component {
  render() {
    return (
      <div>
        <DisplayPanel/>
        <ControlPanel/>
      </div>
    );
  }
}

module.exports = Layout;
