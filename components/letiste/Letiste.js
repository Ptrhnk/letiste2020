import React from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

import { globalWhite, globalBlack } from "constants/index";

const Nadpis = styled(animated.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 54%;
  display: flex;
  color: ${globalWhite};
  font-weight: 700;

  @media (max-height: 500px) {
    height: 68%;
  }
`;

const Letter = styled(animated.h1)`
  height: 30rem;
  height: 100%;
  font-size: 6rem;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-grow: 1;
  margin: 0 1px;
  letter-spacing: 0;
  align-items: ${({ odd }) => (odd ? "flex-end" : "flex-start")};
  border-radius: ${({ odd }) => (odd ? "0 0 20rem 20rem" : " 20rem 20rem 0 0")};
  color: ${globalBlack};
  /* border: 1px solid black; */
  @media (max-width: 700px) {
    font-size: 3.4rem;
  }
`;

export const Letiste = ({ toggle, text }) => {
  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 50,
      mass: 1,
    },
    opacity: toggle ? "0" : "1",
  });

  return (
    <Nadpis style={strobeAnim}>
      {text.split("").map((letter, key) => {
        return (
          <Letter key={key} odd={key % 2}>
            <div>{letter}</div>
          </Letter>
        );
      })}
    </Nadpis>
  );
};
