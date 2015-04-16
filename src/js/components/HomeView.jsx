// HomeView.jsx
'use strict';

var React     = require('react');
var Bootstrap = require('react-bootstrap');

var HomeView = React.createClass({
    render: function() {
        return (
            <div className='HomeView'>
                <Bootstrap.Jumbotron>
                    <h1>Hello world!</h1>
                    <p>Welcome to react-starter.</p>
                </Bootstrap.Jumbotron>
            </div>
        );
    }
});

module.exports = HomeView;
