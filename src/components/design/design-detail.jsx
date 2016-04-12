var React = require('react');
var Router = require('react-router');
var DesignWork = require('./design-work');
var Comments = require('./comment-section');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="design-detail">
        <div className="design-intro">
            <div className="content-container">
            <div className="col-md-8 design-intro-section">
            <h3>Shopping website design</h3>
            <p>Post 1 month ago</p>
            <p>XXX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
            </div>
            <div className="col-md-4 design-intro-section"> user intro</div>
            </div>
        </div>
        <div className="content-container">
            <DesignWork />    
            <div className="comments-container col-md-4"><Comments /></div>
        </div>
    </div>
    
  }
});