import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import PartnerBox from "./PartnerBox";
import { globalBlack, globalBorder } from "constants/index";

const Container = styled(animated.div)`
  position: absolute;
  bottom: 2rem;
  left: 0;
  /* border: 1px dotted white; */

  display: flex;
  justify-content: center;
  align-items: center;
`;
const PartnersContainer = ({ partners, name }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0 },
    config: { tension: 200, friction: 30, mass: 2 },
  });
  return (
    <Container style={animation}>
      {partners.map((item, key) => (
        <PartnerBox partner={item} key={key} />
      ))}
    </Container>
  );
};

export default PartnersContainer;
