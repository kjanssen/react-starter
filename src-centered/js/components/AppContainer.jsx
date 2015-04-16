// AppContainer.jsx
'use strict';

var React           = require('react');
var RouteHandler    = require('react-router').RouteHandler;

var AppContainer = React.createClass({
    render: function() {
        return (
            <div className='AppContainer container'>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = AppContainer;
