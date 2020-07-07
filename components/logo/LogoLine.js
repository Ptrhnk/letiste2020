import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Line = styled(animated.line)`
  fill: none;
  stroke: rgba(255, 255, 255, 0.7);
  stroke-linejoin: round;
  stroke-width: 1px;
  stroke-linecap: round;
  /* stroke-dasharray: 0 8; */
  stroke-dashoffset: 32;
`;

const colours = ["rgba(0, 180, 255, 1)", "rgba(255, 80, 180, 1)"];
const initHue = 200;
const hueWidth = 60;

const LogoLine = ({ x1, y1, x2, y2, blick }) => {
  const [offset, setOffset] = useState(3);
  const [space, setSpace] = useState(20);
  const [width, setWidth] = useState(6);
  const [hue, setHue] = useState(initHue);

  useEffect(() => {
    if (!blick) {
      setOffset(Math.floor(Math.random() * 2 + 8));
      setSpace(Math.floor(Math.random() * 8 + 16));
    } else {
      setHue(Math.floor(Math.random() * 360));
      // const increment = 50;
      // setHue(
      //   hue + increment > initHue + hueWidth
      //     ? hue - hueWidth + increment
      //     : hue + increment
      // );
    }
  }, [blick]);

  const flashAnimations = useSpring({
    config: {
      tension: blick ? 200 : 60,
      friction: blick ? 24 : 100,
      mass: blick ? 2 : 1
    },
    opacity: blick ? .9 : 0,
    // stroke: blick ? `rgba(255, 80, 180, 1)` : `rgba(255, 0, 220, 0.2)`,
    // stroke: blick ? `rgba(0, 230, 255, 1)` : `rgba(0, 100, 255, 0.4)`,
    stroke: blick ? `hsl(196, 95%, 80%)` : `rgba(0, 100, 255, 0.4)`,
    // stroke: blick ? `hsl(${hue}, 100%, 50%)` : `hsl(${hue - 10}, 0%, 0%)`,
    strokeWidth: blick ? `${width}px` : `${0}px`,
    strokeDashoffset: offset,
    strokeDasharray: `0 ${space}`
    // stroke: `rgba(255, ${blick ? 255 : 20}, 255, ${blick ? 0.8 : 0.1})`
  });
  const pointMovement = useSpring({
    config: { tension: 200, friction: 1, mass: 1 },
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2
  });

  return (
    <Line
      x1={pointMovement.x1}
      y1={pointMovement.y1}
      x2={pointMovement.x2}
      y2={pointMovement.y2}
      blick={blick ? 1 : 0}
      style={flashAnimations}
    />
  );
};

export default LogoLine;
