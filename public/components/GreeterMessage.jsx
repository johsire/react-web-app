const React = require("react");

// Presentational Component - don't maintain state -
// take props from parent, & render s'thing to the screen
const GreeterMessage = React.createClass({
  render: function() {
    let name = this.props.name;
    let message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}!</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
