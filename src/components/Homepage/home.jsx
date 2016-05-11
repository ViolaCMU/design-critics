var React = require('react');
var Thumbnail = require('./thumbnail');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function() {
        return {
            designs: []
        };
    },
    componentWillMount: function() {
      this.bindAsArray(new Firebase(rootUrl + 'designs/'), "designs");
    },
  render: function() {
      var gallery = this.state.designs.map(function(design){
              return <Thumbnail design={design} key={design['.key']} avatar="user4.jpg" />
          });
      console.log(this.state.designs);
    return <div className="page-container">
        <div className="search">
            <form>
                <input type="text" defaultValue="Search..." />
                <input type="image" src="img/searchicon.png" alt="Submit" width="20" height="20" />
            </form>
        </div>
        <div className="popular-designs">
            {gallery}
        </div>
            
    </div>
  }
});