const React = require("react");
const ReactDOM = require("react-dom");

const GreeterMessage = require("./components/GreeterMessage");

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
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="name" placeholder="Enter Name" />
        </div>
        <div>
          <textarea
            ref="message"
            placeholder="Enter Message"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
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
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

let firstName = "Coder Joh";

ReactDOM.render(<Greeter name={firstName} />, document.getElementById("app"));
