var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            followed: '',
            invited: ''
        };
    },
    toggleFollow: function(){
        if(this.state.followed === ''){
            this.setState({followed: 'active'});  
        }else{
            this.setState({followed: ''});  
        }
    },
    toggleInvite: function(){
        if(this.state.invited === ''){
            this.setState({invited: 'active'});  
        }else{
            this.setState({invited: ''});  
        }
    },
  render: function() {
    return <div>
        <div className="account-profile">
            <div className="usrinfo1">
                <div className="profpic"><img src="./img/profile-img.gif" /></div>
                <div className="usrinfo">
                    <h1 className="usr1">Amenda</h1>
                    <p className="usr2">UX Designer</p><br />
                    <p className="usr3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        
            <div className="usrinfo2">
                <div className="subinfo">
                    <div className="num_project">
                        <p>14</p>
                        <h2>project</h2>
                    </div>

                    <div className="num_group">
                        <p>07</p>
                        <h2>group</h2>
                    </div>

                    <div className="num_following">
                        <p>35</p>
                        <h2>following</h2>
                    </div>

                    <div className="num_follower">
                        <p>22</p>
                        <h2>follower</h2>
                    </div>
                </div>

                <div className="buttons">
                    <a className={"button " + this.state.followed} id="follow" onClick={this.toggleFollow}>
                        <p>Follow</p>
                        <i className="fa fa-check" aria-hidden="true"></i></a>
                    <a className={"button " + this.state.invited} id="invite" onClick={this.toggleInvite}>
                        <p>Invite</p>
                        <i className="fa fa-user-plus" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
</div>
  }
});