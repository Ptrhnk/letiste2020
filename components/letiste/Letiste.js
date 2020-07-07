import React from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

const Nadpis = styled(animated.h1)`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 10rem;
  text-align: center;
  color: black;
  width: 100%;
`;

export const Letiste = ({ toggle }) => {
  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 20,
      mass: 1,
    },
    color: toggle ? "rgba(0,0,0,0)" : "black",
  });

  return <Nadpis style={strobeAnim}>LETIŠTĚ</Nadpis>;
};
