var React = require('react');
var Main = require('../components/Main.jsx');
var Home = require('../components/Home.jsx');
var Login = require('../components/Login.jsx');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var MapApp = require('../components/MapApp.jsx');
    // <IndexRoute component={Home} />


module.exports = (
  <Route path="/" component={Main}>
    <IndexRoute component={MapApp} />
    <Route name="login" path="login" component={Login} />
    <Route name="map" path="map" component={MapApp} />
  </Route>
);
