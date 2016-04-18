var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    return <div className="page-container">
        <div className="search">
            <form>
                <input type="text" defaultValue="Search..." />
                <input type="image" src="img/searchicon.png" alt="Submit" width="20" height="20" />
            </form>
        </div>
        <div className="popular-designs">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />
        </div>
    </div>
  }
});