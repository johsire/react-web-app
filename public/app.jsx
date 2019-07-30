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

    let name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = "";
      this.props.onNewName(name);
    }

    let message = this.refs.message.value;

    if (message.length > 0) {
      this.refs.message.value = "";
      this.props.onNewMessage(message);
    }
  },

  getInitialState: function() {
    return {
      message: this.props.message,
      name: this.props.name
    };
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
         <input
          type="text"
          ref="name"
          placeholder="Enter Name Here"
       />
          <br />
          <textarea
            ref="message"
            placeholder="Enter Message Here"
            cols="30"
            rows="10"
          />
          <br />
          <button>Submit</button>
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

  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },

  handleNewMessage: function(message) {
    this.setState({
      message: message
    });
  },

  render: function() {
    let name = this.state.name;
    let message = this.state.message;

    return (
      <div>
      <GreeterMessage
         name={name}
         message={message}
       />
        <GreeterForm
          onNewName={this.handleNewName}
          onNewMessage={this.handleNewMessage}
        />
      </div>
    );
  }
});

let firstName = "Coder Joh";

ReactDOM.render(<Greeter name={firstName} />, document.getElementById("app"));
