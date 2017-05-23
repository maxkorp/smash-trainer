const React = require('react');
const { inject, observer } = require('mobx-react');

const movements = require('./../../shared/movements');

@inject('store') @observer
class ControlPanel extends React.Component {
  onChangeNumber(e) {
    this.props.store.setTempo(e.target.value);
  }

  onChangeMovement(e) {
    this.props.store.setMovement(e.target.value);
  }

  renderMovements() {
    return Object.keys(movements).map((id) => {
      const movement = movements[id];
      return (
        <option value={id} key={id}>{movement.name}</option>
      );
    });
  }

  render() {
    return (
      <div className="bottom container">
        <form className="form-inline">
          <div className="form-group">
            <label htmlFor="tempo">Tempo:</label>
            <input type="number" className="mb-2 mr-sm-2 mb-sm-0" id="tempo" onChange={(e) => this.onChangeNumber(e)} value={this.props.store.tempo}/>

            <label htmlFor="movement">Movement:</label>
            <select id="movement" className="mb-2 mr-sm-2 mb-sm-0" onChange={(e) => this.onChangeMovement(e)} value={this.props.store.movement}>
              {this.renderMovements()}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = ControlPanel;
