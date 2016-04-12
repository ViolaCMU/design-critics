var React = require('react');
var CommentsList = require('./comments-list');

module.exports = React.createClass({
  render: function() {
    return <div className="comments-list">
        <header className="title"><h3>Comments</h3></header>
        <CommentsList />
    </div>
    
  }
});