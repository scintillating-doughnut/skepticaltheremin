var Button = require('./Button.jsx');
var ListItem = require('./List-item.jsx')
var React = require('react');



module.exports = React.createClass({
  handleClick: function() {
    this.setState({open: !this.state.open});
  },
  getInitialState: function() {
    return {open: false};
  },
  handleItemClick: function(item) {
    this.setState({
      open: false,
      itemTitle: item
    });
    this.props.whenSelected(item);
  },

  editUpdate: function(item) {
    this.setState({
      itemTitle: item
    });
  },

  render: function (){
    var list = this.props.items.map(function(item){
      return <ListItem item={item}
      whenItemClicked={this.handleItemClick}
      className = {this.state.itemTitle === item ? "active" : "" }/>
    }.bind(this));

    return <div className='dropdown'>
      <Button whenClicked={this.handleClick}
        className='btn-default'
        title={this.state.itemTitle || this.props.title}
        subTitleClassName='caret' />
      <ul className={'dropdown-menu ' + (this.state.open ? 'show' : '') }>
        {list}
      </ul>
    </div>
  }

})
