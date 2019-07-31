const React = require("react");
const ReactDOM = require("react-dom");

const GreeterMessage = require("./components/GreeterMessage");
const GreeterForm = require("./components/GreeterForm");

// Container Component- maintain state and
// render children components
const Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "This is the default message!"
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function(updates) {
    this.setState(updates);
  },

  render: function() {
    let name = this.state.name;
    let message = this.state.message;

    return (
      <div>
        <GreeterMessage
          name={name}
          message={message} />
        <GreeterForm
          onNewData={this.handleNewData} />
      </div>
    );
  }
});

let firstName = "Coder Joh";

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById("app"));
