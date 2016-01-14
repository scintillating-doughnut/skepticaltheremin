var React = require('react');

module.exports = React.createClass({

  render: function () {
    return <option value={this.props.item}>{this.props.item}</option>
  }
});
