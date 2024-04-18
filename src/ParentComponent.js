import React, { Component } from "react";
import ChildComponent from "./ChildComponent.js";

export class ParentComponent extends Component {
  render() {
    return (
      <h1>
        <span className="title">I'm the parent component.</span>
        <ChildComponent text={"i'm the first child"} />
        <ChildComponent text={"i'm the second child"} />
        <ChildComponent text={"i'm the thirt child"} />
      </h1>
    );
  }
}

export default ParentComponent;
