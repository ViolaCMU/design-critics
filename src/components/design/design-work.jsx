var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
    getInitialState: function(){
        // get existing circles
        return {circles: [], i: 0, newCmt: false,
               myCmtState: 'btn-default',
               allCmtState: 'btn-active'
               };
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
        if(this.state.newCmt) {
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
        }
        
//        this.setState({addNew: true});
    },
    showMyCmt: function(){
        this.setState({
            myCmtState: 'btn-active',
            allCmtState: 'btn-default'
        });
        console.log('my');
        this.props.onShowCmt('my');  
    },
    showAllCmt: function(){
        this.setState({
            myCmtState: 'btn-default',
            allCmtState: 'btn-active'
        });
        console.log('all');
        this.props.onShowCmt('all');  
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
            <p className="sub-text design_title_mobile">Meydad's Design</p>
            <a className={"btn btn-2 btn-sm " + this.state.myCmtState} onClick={this.showMyCmt} >My Comment</a>
            <a className={"btn btn-2 btn-sm " + this.state.allCmtState} onClick={this.showAllCmt} >All Comments</a>
        </header>
        <image className="design-work-img" src="./src/Desktop.png" ref="designWork" onClick={this.addCircle} />
        {circles}
    </div>
    
  }
});