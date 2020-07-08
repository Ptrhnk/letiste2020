import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import PartnerBox from "./PartnerBox";
import { globalBlack, globalBorder } from "constants/index";

const Panel = styled(animated.div)`
  position: absolute;
  bottom: 0.6rem;
  left: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px dotted white; */

  @media (max-height: 500px) {
    /* justify-content: center; */
  }
  @media (max-width: 700px) {
    justify-content: flex-start;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px dotted blue; */
`;

const PartnersContainer = ({ partners, name }) => {
  const animation = useSpring({
    opacity: 1,
    transform: "translate(0, 0)",
    from: { opacity: 0 },
    config: { tension: 200, friction: 30, mass: 2 },
  });
  return (
    <Panel>
      <Container style={animation}>
        {partners.map((item, key) => (
          <PartnerBox partner={item} key={key} />
        ))}
      </Container>
    </Panel>
  );
};

export default PartnersContainer;
