import React from "react";
import ReactDOM from "react-dom/client";

//using JSX (just a syntax) also called React Element
const heading = (
  <h1 id="heading" className="root">
    Heading Created using JSX
  </h1>
);

//React Component
//Functional
//Component COmposition
const HeadingComponent = () => (
  <div>
    {heading}
    {/* Three types of Calling of Component */}
    <TitleComponent /> 
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <h1>Heading Created using React Component</h1>
  </div>
);
const TitleComponent = () => <h1 className="title">It is a title Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(jsxheading,heading) Both are same
// root.render(heading); for rendering React Element
root.render(<HeadingComponent />);

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

//Rendering using React.createElement and ReactDOM.createRoot
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Heading created using react Element"
// );
