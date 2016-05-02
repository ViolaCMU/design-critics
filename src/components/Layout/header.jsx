var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Account = require('../Account/account');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ ReactFire ],
    componentWillMount: function(){
        var ref = new Firebase("https://resplendent-heat-8533.firebaseio.com/designs/");
        this.bindAsObject(ref, "designs");
        //console.log(this);
        //this.bindAsObject(new Firebase(rootUrl + 'designs/'), 'designs');
    },
  render: function() {
      //console.log(this);
    return <header className="navbar">
            <Link to="/home" className="logo">
                <img src="./img/logo.png" />
            </Link>
            
            <div className="mypg">
                <Link to="/user/me" className="username">Amenda</Link>
                <div className="profpic"><img src="./img/profilePicture.png" /></div>
            </div>
        </header>
    
  }
});