const React = require("react");

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
          <input
            type="text"
            ref="name"
            placeholder="Enter Name"
          />
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

module.exports = GreeterForm;
