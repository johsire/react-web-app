const React = require("react");
const ReactDOM = require("react-dom");

const GreeterMessage = require("./components/GreeterMessage");

// Presentational Component - don't maintain state -
// take props from parent, & render s'thing to the screen
const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    const updates = {};
    let name = this.refs.name.value;
    let message = this.refs.message.value;

    if (name.length > 0) {
      this.refs.name.value = "";
      updates.name = name;
    }

    if (message.length > 0) {
      this.refs.message.value = "";
      updates.message = message;
    }

    this.props.onNewData(updates);
  },

  render: function() {
    return (
        <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              ref="name"
              placeholder="Enter Name"
            />
          <br />
            <textarea
              ref="message"
              placeholder="Enter Message"
              cols="30"
              rows="10"
            />
          <br />
            <button>Submit</button>
        </form>
    );
  }
});

// Container Component- maintain state and
// render children components
const Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: "React",
      message: "Default message from the component"
    };
  },

  getInitialState: function() {
    return {
      name: this.props.name,
      message: this.props.message
    };
  },

  handleNewData: function(updates) {
    this.setState({
      name: name
    });
  },

  render: function() {
    let name = this.state.name;
    let message = this.state.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

let firstName = "Coder Joh";

ReactDOM.render(
  <Greeter name={firstName} />,
document.getElementById("app"));
