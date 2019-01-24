// This is a styletron example
import React from "react";
import { styled } from "styletron-react";

class Button extends React.Component {
  render() {
    const Panel = styled("div", {
      backgroundColor: "lightblue",
      fontSize: "12px"
    });
    return <Panel>Hello World</Panel>;
  }
}

export default Button;
