var React = require('react');
var Router = require('react-router');
var DesignWork = require('./design-work');
var Comments = require('./comment-section');
var Avatar = require('../Layout/avatar');
var Link = Router.Link;
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var rootUrl = 'https://resplendent-heat-8533.firebaseio.com/';

module.exports = React.createClass({
    mixins: [ReactFire],
    getInitialState: function(){
        return {cmtType: 'all', design: {
            author:{},
            image:'',
            comments: [1,2,3]
        },
               addingCmt: false, followed: '',
               };
    },
    componentWillMount: function(){
        this.design_id = this.props.location.pathname.substring(8);
        console.log(this.design_id);
        this.bindAsObject(new Firebase(rootUrl + 'designs/' + this.design_id), "design");
        //console.log(this.state.design_db);
    },
    onShowCmt: function(type){
        this.setState({cmtType: type});
        console.log(this.state.cmtType);
    },
    setMouseState: function(state){
        this.setState({addingCmt: state});
    },
    toggleFollow: function(){
        if(this.state.followed === ''){
            this.setState({followed: 'active'});  
        }else{
            this.setState({followed: ''});  
        }
    },
  render: function() {
        console.log(this.state.design);
    return <div className="design-detail">
        <div className="design-intro">
            <div className="content-container">
                <div className="col-md-8 design-intro-section">
                    <h1>{this.state.design.title}</h1>
                    <p className="sub-text">Post 1 month ago</p>
                    <p className="design-description">XXX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>  
                </div>
                <div className="col-md-4 design-intro-section">
                    <Avatar />
                    <a className={"btn btn-sm follow " + this.state.followed} onClick={this.toggleFollow}>Follow<i className="fa fa-check" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
        <div className="content-container">
            <DesignWork image={this.state.design.image} onShowCmt={this.onShowCmt} mouseState={this.state.addingCmt} setMouseState={this.setMouseState}/>    
            <div className="comments-container col-md-4"><Comments type={this.state.cmtType} design_id={this.design_id} comments={this.state.design.comments} mouseState={this.state.addingCmt} setMouseState={this.setMouseState}/></div>
        </div>
    </div>
    
  }
});