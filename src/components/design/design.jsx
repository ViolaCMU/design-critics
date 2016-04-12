var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="design-detail">
        <div className="design-intro">
            <div className="col-md-8">design introduction</div>
            <div className="col-md-4"> user intro</div>
        </div>
        <div className="design-work col-md-8">this is the design</div>
        <div className="comments-container col-md-4">commetns</div>
    </div>
    
  }
});