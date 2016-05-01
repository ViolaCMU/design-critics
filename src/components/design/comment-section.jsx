var React = require('react');
var CommentsList = require('./comments-list');

module.exports = React.createClass({
  render: function() {
    return <div className="comments-list">
        <a className="btn btn-sm btn-active title">All Comment</a>
        <CommentsList />
    </div>
    
  }
});