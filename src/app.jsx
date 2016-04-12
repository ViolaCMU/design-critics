var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');


//var thumbnail = React.createClass({
//    render: function() {
//        return <div class="thumbnail">
//            DESIGN
//        </div>
//    }
//});
//
//var navbar = React.createClass({
//    render: function() {
//        return <div class="nav">
//            DESIGN CRITICS
//        </div>
//    }
//});

//var element = React.createElement(Home, {});
ReactDOM.render(Routes, document.querySelector('.container'));
