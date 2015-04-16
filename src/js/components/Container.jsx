// Container.jsx
'use strict';

var React           = require('react');
var RouteHandler    = require('react-router').RouteHandler;

var Container = React.createClass({
    render: function() {
        return (
            <div className='Container container'>
                <RouteHandler/>
            </div>
        );
    }
});

module.exports = Container;
