var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="avatar">
        <div className="profpic"><img src="./img/profilePicture.png" /></div>
        <h2>{this.props.author}</h2>
        <p className="sub-text">Designer | Thinker</p>
    </div>
  }
});