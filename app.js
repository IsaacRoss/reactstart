/**
 * Created by iross on 7/1/2015.
 */
var React = require('react');


var App = React.createClass({
    render(){
        return (
            <div className="container">
                <div className="row">
                    Hello
                </div>
            </div>
        )
    }
});

React.render(<App />,  document.getElementById('root'));

