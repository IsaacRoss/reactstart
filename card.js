/**
 * Created by iross on 7/2/2015.
 */
var React = require('react');

var Card = React.createClass({
    render(){
        return (
            <div>
                I am a card. Implement me.
                the github api is at:<b><br />
                https://api.github.com/users/'{'{username}'}' </b>
            </div>
        )
    }
});




// this is what you need to do in order to be able to require
// this component elseware in the app.
module.exports = Card;



/* for the curious...
JSX is just a convenient way to write out code in a semi-html like manner.
We do not have to use it, we can use the pure javascript functions instead.
The above code would then look like this:

 var Card = React.createClass({displayName: "Card",
    render:function(){
        return (
            React.createElement("div", null,
                "I am a card. Implement me." + " " +
                "the github api is at:", React.createElement("b", null, React.createElement("br", null),
                "https://api.github.com/users/'", '{username}',
             "' ")
            )
        )
    }
 });

.... Who wants to write that???? JSX to the rescue :)

 */