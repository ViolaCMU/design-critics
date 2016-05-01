var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div>
        <div className="account-profile">
            <div className="usrinfo1">
                <div className="profpic"><img src="./img/profilePicture.png" /></div>
                <div className="usrinfo">
                    <h1 className="usr1">Username</h1>
                    <p className="usr2">UX Designer</p><br />
                    <p className="usr3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>
            </div>
        
                
            <div className="usrinfo2">
                <div className="subinfo">    
                    <ul className="numbers">
                        <li>14</li>
                        <li>07</li>
                        <li>11</li>
                        <li>22</li>
                    </ul>

                    <ul className="item">
                        <li>Project</li>
                        <li>Group</li>
                        <li>Following</li>
                        <li>Follower</li>
                    </ul>
                </div>

                <div className="buttons">
                    <div className="button"><p>Follow</p></div>
                    <div className="button"><p>Invite</p></div>
                </div>
            </div>
        </div>
</div>
  }
});