var React = require('react');
var CommentsList = require('./comments-list');

module.exports = React.createClass({
    getInitialState: function(){
        console.log('cmt+ '+ this.props.type);
        var title = {'my': 'My Comment', 'all': 'All Comments'}
        return {cmtTitle: title[this.props.type]};
    },
  render: function() {
    var title = {'my': 'My Comment', 'all': 'All Comments'};
      var addNewComment = '';
      if(this.props.type === 'my'){
          addNewComment = <div>ADDDDDDDDDDD</div>;
          comments = this.props.comments;
      }else{
          addNewComment = <div></div>;
          comments = this.props.comments;
      }
    return <div className="comments-section">
        <a className="btn btn-sm btn-default mobile-comment-title">Add Comment</a>
        <a className="btn btn-sm btn-active title">{title[this.props.type]}</a>
        {addNewComment}
        <CommentsList comments={comments} />
    </div>
    
  }
});