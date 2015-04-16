// Sidebar.jsx
'use strict';

var React       = require('react');
var Router      = require('react-router');
var Bootstrap   = require('react-bootstrap');

var Sidebar = React.createClass({

    mixins: [Router.State, Router.Navigation],

    render: function() {

        var homeHref = this.makeHref('home');
        var homeIsActive = this.isActive('home');

        return (
            <div className='Sidebar'>
                <Bootstrap.PageHeader>React Starter</Bootstrap.PageHeader>

                <Bootstrap.ListGroup>
                    <Bootstrap.ListGroupItem href={homeHref} active={homeIsActive}>Home</Bootstrap.ListGroupItem>
                </Bootstrap.ListGroup>
            </div>
        );
    }
});

module.exports = Sidebar;
