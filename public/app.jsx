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
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name" />
          <button>Enter Name</button>
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
    };
  },

  handleNewName: function(name) {
    this.setState({
      name: name
    });
  },

  render: function() {
    let name = this.state.name;
    let message = this.props.message;

    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewName={this.handleNewName} />
      </div>
    );
  }
});

let firstName = "Coder Joh";

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById("app")
);
