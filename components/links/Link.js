import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

import { globalBlue, globalWhite } from "constants/index";

const Anchor = styled(animated.a)`
  font-size: 2rem;
  color: ${globalBlue};
  margin: 0 1.3rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  border-bottom: 4px solid ${globalBlue};
  text-decoration: none;
  /* border: 1px dotted white; */
  font-weight: 400;

  @media (max-height: 500px) {
    font-size: 1.4rem;
  }
  @media (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

export const Link = ({ link, text, onMouseEnter }) => {
  const [hovered, setHovered] = useState(false);
  const hoverAnim = useSpring({
    config: {
      tension: 500,
      friction: 5,
      mass: 1,
    },
    color: !hovered ? globalWhite : globalBlue,
    borderBottom: !hovered
      ? `4px solid rgba(0,0,0,0)`
      : `4px solid ${globalBlue}`,
  });

  return (
    <Anchor
      href={link}
      onMouseEnter={() => {
        setHovered(true);
        onMouseEnter;
      }}
      onMouseLeave={() => setHovered(false)}
      target="_blank"
      style={hoverAnim}
    >
      {text}
    </Anchor>
  );
};
