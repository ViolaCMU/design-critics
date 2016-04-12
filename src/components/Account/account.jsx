var React = require('react');
var Profile = require('./profile');
var MyWork = require('./mywork');

module.exports = React.createClass({
  render: function() {
    return <div>
        <Profile />
        <MyWork /> 
    </div>
  }
});