var ListItem = require('./List-item.jsx');
var React = require('react');



module.exports = React.createClass({
  handleClick: function(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event);
  },
  getInitialState: function() {
    return {value: ''};
  },
  render: function (){
    var list = this.props.items.map(function(item){
      return <ListItem item={item} />
    }.bind(this));

    return <div className='dropdown'>
      <select onChange={this.handleClick} value={this.state.value}>
      {list}
      </select>
      </div>




  }

})
