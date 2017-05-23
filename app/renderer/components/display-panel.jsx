const React = require('react');
const DrawHandler = require('./draw-handler');

class DisplayPanel extends React.Component {
  render() {
    return (
      <div className="top">
        <svg id="octagon" className="octagon" width="300px" height="300px">
          <polygon points="300,150 256.5,256.5 150,300 43.5,256.5 0,150 43.5,43.5 150,0 256.5,43.5"/>
        </svg>

        <svg id="expected-indicator" className="expected-indicator" width="300px" height="300px">
          <circle cx="150" cy="150" r="15" />
        </svg>

        <svg id="input-indicator" className="input-indicator" width="300px" height="300px">
          <circle cx="150" cy="150" r="15" />
        </svg>
        <DrawHandler/>
      </div>
    );
  }
}

module.exports = DisplayPanel;
