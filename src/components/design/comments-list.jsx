var React = require('react');
var Comment = require('./comment');

module.exports = React.createClass({
  render: function() {
    return <ul className="comments-list">
        <Comment />
    </ul>
    
  }
});