var React = require('react');
var CommentsList = require('./comments-list');

module.exports = React.createClass({
    getInitialState: function(){
        console.log('cmt+ '+ this.props.type);
        var title = {'my': 'My Comment', 'all': 'All Comments'}
        return {cmtTitle: title[this.props.type]};
    },
    addNewCmt: function(){
        this.props.setMouseState(true);
    },
  render: function() {
    var title = {'my': 'My Comment', 'all': 'All Comments'};
      var addNewComment = '';
      var newBtnClass = '';
      if(!this.props.mouseState){
          newBtnClass = '';
      }else{
          newBtnClass = 'selected';
      }
      if(this.props.type === 'my'){
          addNewComment = <div className="new-comment">
              <a className={"btn add-btn " + newBtnClass} onClick={this.addNewCmt}>+</a>
              <p className="sub-text">Select area on the design</p>
              <form action="" method="post">
                  <div className="form-row">
                    <textarea name="comment" rows="10" value={this.state.commentText} />
                  </div>    
                <a className="btn btn-sm btn-active">Submit</a>
                <a className="btn btn-sm btn-default">Cancle</a>
            </form>
          </div>;
          comments = [];
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




