// routes.jsx
'use strict';

var React        = require('react');
var Router       = require('react-router');
var Route        = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Redirect     = Router.Redirect;

// views
var AppContainer = require('./components/AppContainer');
var HomeView     = require('./components/HomeView');

var routes = (
    <Route path='/' handler={AppContainer}>
        <DefaultRoute name='home' handler={HomeView}/>
    </Route>
);

module.exports = routes;
