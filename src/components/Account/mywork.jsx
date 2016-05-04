var React = require('react');
var DesignPrev = require('../design/design-prev');
var NewWork = require('./newwork');


module.exports = React.createClass({
    
  getInitialState: function(){
      var myworks = [{id:1, name: "assignment4"}, {id:2, name: "assignment2"}, {id:3, name: "assignment3"}];
      return {myworks : myworks, addNew : false};
  },
  addDesign: function(){
        //console.log(this.state.addNew);
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
        <div className="mywork">
            
            <h1>My Work</h1>
            <ul className="wrk_ctgry">
                <li>All</li>
                <li>category#1</li>
                <li>category#2</li>
                <li>category#3</li>
            </ul>

            <div className="myprojects">
                <div className="upload" onClick={this.addDesign} >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="project"></div>
                <div className="clear"></div>
            </div>

        </div>
        <div className="mygroup">
            
            <h1>My Group</h1>

            <div className="mygroups">
                <div href="#" className="upload">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
                <div className="group"></div>
                <div className="group"></div>
                <div className="clear"></div>
            </div>

        </div>
       
      <div className={"newwork " + (this.state.addNew ? "show" : "hide")}>
        <NewWork dismiss={this.dismissModal} />
      </div>
    </div>
  }
});