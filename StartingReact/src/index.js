var React = require("react");
var ReactDOM = require("react-dom");

var name = "Deepak Nagarkoti";
ReactDOM.render(
  <div>
    <h1 class="heading">Hello {name}!</h1>
    <p>This is a react js bootcamp</p>
  </div>,
  document.getElementById("root")
);
