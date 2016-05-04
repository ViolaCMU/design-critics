var React = require('react');
var Router = require('react-router');
var DesignWork = require('./design-work');
var Comments = require('./comment-section');
var Avatar = require('../Layout/avatar');
var Link = Router.Link;

module.exports = React.createClass({
    getInitialState: function(){
        return {cmtType: 'all', design: {},
               addingCmt: false};
    },
    componentWillMount: function(){
        this.setState({design: {
            author:{},
            image:'',
            comments: [1,2,3]
        }});
    },
    onShowCmt: function(type){
        this.setState({cmtType: type});
        console.log(this.state.cmtType);
    },
    setMouseState: function(state){
        this.setState({addingCmt: state});
    },
  render: function() {
    return <div className="design-detail">
        <div className="design-intro">
            <div className="content-container">
                <div className="col-md-8 design-intro-section">
                    <h1>Shopping website design</h1>
                    <p className="sub-text">Post 1 month ago</p>
                    <p className="design-description">XXX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                </div>
                <div className="col-md-4 design-intro-section">
                    <Avatar />
                    <a className="btn btn-sm follow">Follow<i className="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div className="content-container">
            <DesignWork onShowCmt={this.onShowCmt} mouseState={this.state.addingCmt} setMouseState={this.setMouseState}/>    
            <div className="comments-container col-md-4"><Comments type={this.state.cmtType} comments={this.state.design.comments} mouseState={this.state.addingCmt} setMouseState={this.setMouseState}/></div>
        </div>
    </div>
    
  }
});