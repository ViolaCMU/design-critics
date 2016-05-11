var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
  render: function() {
      console.log();
    return <div className="home-thumbnail">
        <div className="info">       
            <div className="profile"></div>
            <h2 className="username">{this.props.design.author}</h2>
            <div className="viewdata">
                <div>
                    <i className="fa fa-eye"></i> 1235
                </div>
                <div>
                    <i className="fa fa-comment"></i> 23
                </div>
            </div>
        </div>
        <Link className="description" to={"/design/"+this.props.design['.key']}>
            <h1 className="description_title">{this.props.design.title}</h1>
            <p className="description_words">{this.props.design.description}</p>
        </Link>
        <div className="thumbnail-bg">
            <img src={this.props.design.image} className="img_thumbnail" />
        </div>
    </div>
  }
});