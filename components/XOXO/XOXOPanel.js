import React from "react";
import styled from "styled-components";

import { XOXOBox } from "components/XOXO/XOXOBox";

const Panel = styled.div`
  position: absolute;
  top: 10%;
  bottom: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 10000;
  /* border: 1px dotted white; */
`;

export const XOXOPanel = ({ text, side }) => {
  return (
    <Panel style={side.includes("right") ? { right: "0" } : { left: "0" }}>
      {text.split("").map((letter) => (
        <XOXOBox letter={letter} />
      ))}
    </Panel>
  );
};
