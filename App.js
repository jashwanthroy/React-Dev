import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Heading created using react Element"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//For the Understanding of basics of react environment
/*
 * <div id="Parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 */
//Nested HTML structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "H1 Tag"),
//     React.createElement("h2", { id: "heading2" }, "H2 Tag"),
//   ])
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// ); // -> returns Object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// root.render(parent); //-> Makes the element to placed on the Top of DOM
