/**
 * Created by iross on 7/1/2015.
 */
var React = require('react');

// using webpack allows up to require other files the same
// way we would do in node. You just have to export the module -> see card.js
var Card = require('./card');

var App = React.createClass({
    render(){
        return (
            <div className="container">
                <div className="row">
                    <Card />
                </div>
            </div>
        )
    }
});

React.render(<App />,  document.getElementById('root'));

