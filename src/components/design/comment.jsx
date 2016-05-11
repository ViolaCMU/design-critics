var React = require('react');
var Avatar = require('../Layout/avatar');

module.exports = React.createClass({
  render: function() {
    return <li className="comment">
        <Avatar />
        <div className="comment-content">
            <p className="comment-text">{this.props.cmt.content}</p>
        </div>
        <div className="comment-activity">
            <div className="comment-agree"><i className="fa fa-heart" aria-hidden="true"></i>Agree(30)</div>
        
        </div>
    </li>
    
  }
});