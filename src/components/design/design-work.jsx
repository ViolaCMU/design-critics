var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="design-work col-md-8">
        <header className="btn-bar">
            <a className="btn btn-2 btn-lg btn-default">My Comment</a>
            <a className="btn btn-2 btn-lg btn-active">All Comment</a>
        </header>
        <image className="design-work-img" src="./src/Desktop.png" />
    </div>
    
  }
});