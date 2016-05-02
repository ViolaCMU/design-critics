var React = require('react');
var Header = require('./Layout/header');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    componentWillMount: function(){
        var ref = new Firebase(rootUrl);
//        ref.createUser({
//          email    : "bobtony@firebase.com",
//          password : "correcthorsebatterystaple"
//        }, function(error, userData) {
//          if (error) {
//            console.log("Error creating user:", error);
//          } else {
//            console.log("Successfully created user account with uid:", userData.uid);
//          } 
//        });
         ref.authWithPassword({
          email    : "bobtony@firebase.com",
          password : "correcthorsebatterystaple"
        }, function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
          }
        });
    },
  render: function() {
    return <div>
        <Header />
        {this.props.children}
    </div>
  }
});