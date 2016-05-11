var React = require('react');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
            title: '',
            description: '',
            image_uri: '',
            filename: 'Choose a file'
        };
    },
    componentWillMount: function(){
        this.bindAsArray(new Firebase(rootUrl + 'designs/'), "designs");
    },
    handleTitle: function(e){
        this.setState({title: e.target.value});
    },
    handleDesc: function(e){
        this.setState({description: e.target.value});
    },
    handleFile: function(e){
        var self = this;
        var reader = new FileReader();
        var file = e.target.files[0];

        reader.onload = function(upload) {
          self.setState({
            image_uri: upload.target.result,
            filename: file.name
          });
        }

        reader.readAsDataURL(file);
    },
    addDesign: function(e){
        e.preventDefault();
        this.firebaseRefs["designs"].push({
            title: this.state.title,
            description: this.state.description,
            image: this.state.image_uri,
            author: 'Amenda',
            comments: []
        });
        this.props.dismiss();
        this.setState({title: '',
            description: '',
            image_uri: '',
            filename: 'Choose a file'});
    },
  render: function() {
    return <div className="addDesignModal">
        <header className="title"><h3>Upload new work</h3></header>
        <div className="content-container">
            <form action="" method="post">
              <div className="form-row">
                <span className="form-label">Title</span>
                <input type="text" name="title" value={this.state.title} onChange={this.handleTitle}/>
              </div>
              <div className="form-row">
                <span className="form-label">Description</span>
                <input type="text" name="desciption" value={this.state.description} onChange={this.handleDesc} />
              </div>    
              <div className="form-row">
                <span className="form-label">Work shot</span>
                <input type="file" id="design-file" accept=".png, .jpg, .jpeg" name="design" onChange={this.handleFile} /> 
                <label htmlFor="design-file">{this.state.filename}</label>
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