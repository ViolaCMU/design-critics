var React = require('react');
var Avatar = require('../Layout/avatar');

module.exports = React.createClass({
  render: function() {
    return <li className="comment">
        <Avatar />
        <div className="comment-content"></div>
    </li>
    
  }
});