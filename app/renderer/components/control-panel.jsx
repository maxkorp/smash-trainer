const React = require('react');
const { inject, observer } = require('mobx-react');

@inject('store') @observer
class ControlPanel extends React.Component {
  onChangeNumber(e) {
    this.props.store.setTempo(e.target.value);
  }

  onChangeMovement(e) {
    this.props.store.setMovement(e.target.value);
  }

  render() {
    return (
      <form className="bottom form-inline">
        <div className="form-group">
          <label htmlFor="tempo">Tempo:</label>
          <input type="number" className="form-control" id="tempo" onChange={(e) => this.onChangeNumber(e)} value={this.props.store.tempo}/>

          <label htmlFor="movement">Movement:</label>
          <select id="movement" onChange={(e) => this.onChangeMovement(e)} value={this.props.store.movement}>
            <option value="perfect-pivot">Perfect Pivot</option>
            <option value="goats">Goats</option>
          </select>
        </div>
      </form>
    );
  }
}

module.exports = ControlPanel;
