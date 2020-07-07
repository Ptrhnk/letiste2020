import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

import LogoLetisteSvg from "../components/logo/LogoLetisteSvg";

const PageContainer = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  color: white;
  z-index: 10000;
`;

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [color, setColor] = useState("rgb(200, 200, 200)");
  const strobeAnim = useSpring({
    config: {
      tension: 200,
      friction: 10,
      mass: 1,
    },
    backgroundColor: backgroundColor,
    color: color,
  });

  useEffect(() => void setInterval(() => strobe(), 1000), []);

  const strobe = () => {
    setTimeout(() => {
      setBackgroundColor("rgb(200, 200, 200)");
      setColor("black");
      setTimeout(() => {
        setBackgroundColor("black");
        setColor("rgb(200, 200, 200)");
      }, Math.floor(Math.random() * 150 + 50));
    }, Math.floor(Math.random() * 4000 + 100));
  };

  return (
    <PageContainer style={strobeAnim}>
      <LogoLetisteSvg />
      <a
        href="https://goout.net/cs/festivaly/letiste-x0x0/jmwsf/+offoq/"
        target="_blank"
      >
        Lístky
      </a>
      <a
        href="https://www.facebook.com/events/283634622785037/"
        target="_blank"
      >
        Událost
      </a>
    </PageContainer>
  );
}
