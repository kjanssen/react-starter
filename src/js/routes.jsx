// routes.jsx
'use strict';

var React        = require('react');
var Router       = require('react-router');
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect     = Router.Redirect;

// views
var Container    = require('./components/Container');
var HomeView     = require('./components/HomeView');

var routes = (
    <Route path='/' handler={Container}>
        <DefaultRoute name='home' handler={HomeView}/>
    </Route>
);

module.exports = routes;
