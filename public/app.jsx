const React = require("react");

const ReactDOM = require("react-dom");

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

// Presentational Component - don't maintain state -
// take props from parent, & render s'thing to the screen
const GreeterForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    let updates = {};
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
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input
              type="text"
              ref="name"
              placeholder="Enter Name"
            />
          </div>
          <br />
          <div>
            <textarea
              ref="message"
              placeholder="Enter Message"
              cols="30"
              rows="10"
            />
          </div>
          <br />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
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
