var React = require('react');
var CommentsList = require('./comments-list');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
        console.log('cmt+ '+ this.props.type);
        var title = {'my': 'My Comment', 'all': 'All Comments'}
        return {cmtTitle: title[this.props.type],
               commentText: ''};
    },
    componentWillMount: function(){
        this.bindAsArray(new Firebase(rootUrl + 'designs/' + this.props.design_id + '/comments'), "comments");
    },
    addNewCmt: function(){
        this.props.setMouseState(true);
    },
    handleTextarea: function(e){
        this.setState({commentText: e.target.value});
    },
    addComment: function(e){
        e.preventDefault();
        console.log(this.firebaseRefs);
        this.firebaseRefs['comments'].push({
            author: 'Me',
            content: this.state.commentText,
            x: 20,
            y: 30
        });
        this.setState({commentText: ''});
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
                    <textarea name="comment" rows="10" value={this.state.commentText} onChange={this.handleTextarea} />
                  </div>    
                <a className="btn btn-sm btn-active" onClick={this.addComment}>Submit</a>
                <a className="btn btn-sm btn-default">Cancle</a>
            </form>
          </div>;
          comments = this.state.comments.filter(function(cmt){
              return cmt.author === 'Me';
          });
      }else{
          addNewComment = <div></div>;
          comments = this.state.comments;
      }
      
    return <div className="comments-section">
        <a className="btn btn-sm btn-default mobile-comment-title">Add Comment</a>
        <a className="btn btn-sm btn-active title">{title[this.props.type]}</a>
        {addNewComment}
        <CommentsList comments={comments} />
    </div>
    
  }
});




