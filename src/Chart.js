// This is a styled component example
import React from "react";
import styled from "styled-components";

const Button = styled.a`
  color: orange;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const Chart = () => (
  <div>
    <Button>This is a button</Button>
  </div>
);

export default Chart;
