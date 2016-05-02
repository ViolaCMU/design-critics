var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
    return <div className="home-thumbnail">
        <div className="info">       
            <div className="profile"></div>
            <h2 className="username">Alice</h2>
            <div className="viewdata">
                <div>
                    <i className="fa fa-eye"></i> 1235
                </div>
                <div>
                    <i className="fa fa-comment"></i> 23
                </div>
            </div>
        </div>
        <Link className="description" to="/design/1">
            <h1 className="description_title">Peronal Website</h1>
            <p className="description_words">XXX is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to... </p>
        </Link>
        <div className="thumbnail-bg">
            <img src="img/Main3.png" className="img_thumbnail" />
        </div>
    </div>
  }
});