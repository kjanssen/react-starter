// AppContainer.jsx
'use strict';

var React           = require('react');
var RouteHandler    = require('react-router').RouteHandler;
var Sidebar         = require('./Sidebar');

var AppContainer = React.createClass({
    render: function() {
        return (
            <div className='AppContainer'>
                <div className='sidebar container'>
                    <Sidebar/>
                </div>
                <div className='content container'>
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = AppContainer;
