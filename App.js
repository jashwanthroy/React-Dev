import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => (
  <div className="header">
    <div className="Logo-container">
      <img src="https://www.google.com/imgres?q=logo%20of%20a%20shopping%20mall&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20200701%2Foriginal%2Fpngtree-shopping-mall-logo-png-image_5406131.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Ffreepng%2Fshopping-mall-logo_5406131.html&docid=9Lm_PyiyFZh3rM&tbnid=-AZeTArA14F6CM&vet=12ahUKEwjT-qjllLiQAxXpzDgGHWK8NGYQM3oECCQQAA..i&w=1200&h=1200&hcb=2&ved=2ahUKEwjT-qjllLiQAxXpzDgGHWK8NGYQM3oECCQQAA" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);
const RestroCard = (props) => (
  <div className="restrocard">
    <img className= "restrologo" alt="logo" src="normal.jpg"/>
    <h3>{props.restaurantname}</h3>
    <h4>{props.cuisine}</h4>
    <h4>{props.rating}stars</h4>
    <h4>30mins delivery</h4>
  </div>
);

const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="restrocontainer">
      <RestroCard restaurantname="Pista House" cuisine="Biryani, North indian,Mandi,Asian" rating="4.3"/>
      <RestroCard restaurantname="KFC" cuisine="Burger,wings,sides" rating="3.9"/>
      <RestroCard restaurantname="CHACHA Food Point" cuisine="chicken kebab,chicken curry" rating="4.5"/>
    </div>
  </div>
);

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

//using JSX (just a syntax) also called React Element
// const heading = (
//   <h1 id="heading" className="root">
//     Heading Created using JSX
//   </h1>
// );

//React Component
//Functional
//Component COmposition
// const HeadingComponent = () => (
//   <div>
//     {heading}
//     {/* Three types of Calling of Component */}
//     <TitleComponent />
//     <TitleComponent></TitleComponent>
//     {TitleComponent()}
//     <h1>Heading Created using React Component</h1>
//   </div>
// );
// const TitleComponent = () => <h1 className="title">It is a title Component</h1>;

// console.log(jsxheading,heading) Both are same
// root.render(heading); for rendering React Element
// root.render(<HeadingComponent />);

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
