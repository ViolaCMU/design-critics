var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var Design = require('./components/Design/design-detail');
var Home = require('./components/Homepage/home');
var Account = require('./components/Account/account');

module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="home" component={Home} />
            <Route path="design/:id" component={Design} />
            <Route path="user/:id" component={Account} />
                
            
        </Route>
    </Router>
)