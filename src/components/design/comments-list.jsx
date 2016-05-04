var React = require('react');
var Comment = require('./comment');

module.exports = React.createClass({
  render: function() {
      var comments = this.props.comments.map(function(cmt) {
          return (
                <Comment cmt={cmt} />
          );
      });
    return <ul className="comments-list">
        {comments}
    </ul>
    
  }
});