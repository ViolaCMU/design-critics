var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <div className="addDesignModal">
        <header className="title"><h3>Upload mew work</h3></header>
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
                <input type="file" accept=".png, .jpg, .jpeg" name="design" />  
              </div>
            </form>
        </div>
        <footer className="btn-bar">
            <button className="btn btn-2 btn-default" onClick={this.props.dismiss}>Cancel</button>
            <button className="btn btn-2 btn-active">Submit</button>
        </footer>
    </div>
  }
});