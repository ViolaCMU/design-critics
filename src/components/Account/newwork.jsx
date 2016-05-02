var React = require('react');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ ReactFire ],
    getInitialState: function() {
        return {
            designs: [],
            title: ''
        };
    },
    componentWillMount: function(){
        var FirebaseRef = new Firebase(rootUrl + 'designs/');
        this.bindAsArray(FirebaseRef, "designs");
        console.log(this);
        //this.bindAsObject(new Firebase(rootUrl + 'designs/'), 'designs');
    },
    addDesign: function(e){
        e.preventDefault();
        this.firebaseRefs["designs"].push({
            title: "newDes",
            img: "new.jpg"
        });
//        this.setState({text: ""});
    },
  render: function() {
      console.log(this.state.designs);
    return <div className="addDesignModal">
        <header className="title"><h3>Upload new work</h3></header>
        <div className="content-container">
            <form action="" method="post">
              <div className="form-row">
                <span className="form-label">Title</span>
                <input type="text" name="title" />
              </div>
              <div className="form-row">
                <span className="form-label">Description</span>
                <input type="text" name="desciption" />
              </div>    
              <div className="form-row">
                <span className="form-label">Work shot</span>
                <input type="file" id="design-file" accept=".png, .jpg, .jpeg" name="design" /> 
                <label htmlFor="design-file">Choose a file</label>
              </div>
            </form>
        </div>
        <footer className="btn-bar">
            <a className="btn btn-2 btn-lg btn-default" onClick={this.props.dismiss}>Cancel</a>
            <a className="btn btn-2 btn-lg btn-active" onClick={this.addDesign}>Submit</a>
        </footer>
    </div>
  }
});