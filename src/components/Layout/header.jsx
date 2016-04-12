var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Account = require('../Account/account');

module.exports = React.createClass({
  render: function() {
    return <header className="navbar">
            <Link to="/" className="logo">
                <img src="./img/logo.png" />
            </Link>
            
            <div className="mypg">
                <Link to="/user/me" className="username">Amenda</Link>
                <div className="profpic"><img src="./img/profilePicture.png" /></div>
            </div>
        </header>
    
  }
});