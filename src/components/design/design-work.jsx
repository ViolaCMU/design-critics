var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="design-work col-md-8">
        <header className="btn-bar">
            <button className="btn btn-2 btn-default">My Comment</button>
            <button className="btn btn-2 btn-active">All Comment</button>
        </header>
        <image className="design-work-img" src="./src/Desktop.png" />
    </div>
    
  }
});