var React = require('react');
var DesignPrev = require('../design/design-prev');
var NewWork = require('./newwork');


module.exports = React.createClass({
    
  getInitialState: function(){
      var myworks = [{id:1, name: "assignment4"}, {id:2, name: "assignment2"}, {id:3, name: "assignment3"}];
      return {myworks : myworks, addNew : false};
  },
  addDesign: function(){
        console.log(this.state.addNew);
        this.setState({addNew: true});
  },
  dismissModal: function(){
        this.setState({addNew: false});
  },
  render: function() {
    var designSet = this.state.myworks.map(function(work){
      return <DesignPrev work={work} key={work.id}/>
    });
    
    return <div>
      {designSet}
      <button onClick={this.addDesign} >Add A Design</button>  
      <div className={"newwork " + (this.state.addNew ? "show" : "hide")}>
        <NewWork dismiss={this.dismissModal} />
      </div>
      <image src="./src/Desktop.png" />
    </div>
  }
});