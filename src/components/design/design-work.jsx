var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    getInitialState: function(){
        // get existing circles
        return {circles: [], i: 0};
    },
    componentDidMount: function() {
        window.addEventListener('resize', this.handleResize);
    },

    componentWillUnmount: function() {
        window.removeEventListener('resize', this.handleResize);
    },
    handleResize: function() {
        var img = ReactDOM.findDOMNode(this.refs.designWork);
        console.log(img.offsetWidth);
        console.log(img.offsetHeight);
//        this.setState({circles: this.state.circles.map(function(circle){
//            //update the top and left
//            return circle;
//        })});
    },
    addCircle: function(e){
        var img = ReactDOM.findDOMNode(this.refs.designWork);
        console.log(img.offsetLeft);
        console.log(img.offsetTop);
        console.log(img.offsetWidth);
        console.log(img.offsetHeight);
        console.log(e.pageX);
        console.log(e.pageY);
        var newCircleStyle = {
          position: 'absolute',
          top: e.pageY - 400,
          left: e.pageX - 48
        };
        console.log(newCircleStyle);
        var newC = {id:this.state.i, name: 'hello', style: newCircleStyle};
        this.setState({i:this.state.i+1});
        this.setState({circles: this.state.circles.concat(newC)});
//        this.setState({addNew: true});
    },
  render: function() {
    var circles = this.state.circles.map(function(circle) {
      return <div className="circle out red" style={circle.style} key={circle.id}>
            <div className="circle inside red">1
            </div>
        </div>;
    });
    return <div className="design-work col-md-8">
        <header className="btn-bar">
            <a className="btn btn-2 btn-sm btn-default">My Comment</a>
            <a className="btn btn-2 btn-sm btn-active">All Comment</a>
        </header>
        <image className="design-work-img" src="./src/Desktop.png" ref="designWork" onClick={this.addCircle} />
        {circles}
    </div>
    
  }
});