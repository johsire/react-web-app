const React = require("react");
const ReactDOM = require("react-dom");

const Greeter = require("./components/Greeter");

let firstName = "Coder Joh";

ReactDOM.render(
  <Greeter name={firstName} />,
  document.getElementById("app"));
