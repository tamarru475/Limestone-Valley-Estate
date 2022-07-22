import React from "react";
import About from "./About";
import Stay from "./Stay";
import Shop from "./Shop";
import Gallery from "./gallery";

export default function Main(props) {
  return (
    <main className="main">
      <About />
      <Stay />
      <Shop onItemClick={props.onItemClick} />
      {props.children}
      <Gallery />
    </main>
  );
}
