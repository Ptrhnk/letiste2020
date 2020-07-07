import React from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

import { XOXOBox } from "components/XOXO/XOXOBox";

const Panel = styled(animated.div)`
  position: absolute;
  top: 16%;
  bottom: 16%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  z-index: 10000;
  /* border: 1px dotted white; */
`;

export const XOXOPanel = ({ text, side, toggle }) => {
  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 20,
      mass: 1,
    },
    opacity: toggle ? "1" : "0",
  });

  return (
    <Panel
      style={
        (strobeAnim, side.includes("right") ? { right: "0" } : { left: "0" })
      }
    >
      {text.split("").map((letter, key) => (
        <XOXOBox letter={letter} key={key} />
      ))}
    </Panel>
  );
};
