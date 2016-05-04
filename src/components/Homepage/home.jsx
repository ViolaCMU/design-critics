var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    return <div className="page-container">
        <div className="search">
            <form>
                <input type="text" defaultValue="Search..." />
                <input type="image" src="img/searchicon.png" alt="Submit" width="20" height="20" />
            </form>
        </div>
        <div className="popular-designs">
            <Thumbnail design="./img/design_work/design06.jpg" author="Alice" avatar="user4.jpg" />
            <Thumbnail design="./img/design_work/design05.jpg" author="Tomas" avatar="user1.jpg" />
            <Thumbnail design="./img/design_work/design15.jpg" author="Julio" avatar="user2.jpg" />
            <Thumbnail design="./img/design_work/design17.jpg" author="Amenda" avatar="user3.jpg" />
            <Thumbnail design="./img/design_work/design16.jpg" author="Amenda" avatar="user3.jpg" />
            <Thumbnail design="./img/design_work/design18.jpg" author="Tomas" avatar="user1.jpg" />
        </div>
    </div>
  }
});