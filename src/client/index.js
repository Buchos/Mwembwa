import React from "react";
import ReactDOM from "react-dom";
import MapOpen from "./MapOpen";
import Overlay from "./overlay";

ReactDOM.render(<Overlay />, document.querySelector("#app"));
ReactDOM.render(<MapOpen />, document.querySelector("#root"));
