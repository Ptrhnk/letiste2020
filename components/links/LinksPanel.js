import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10000;
  width: 90%;
  /* border: 1px dotted white; */

  @media (max-height: 500px) {
    top: 6%;
  }
  @media (max-width: 700px) {
    top: 5%;
    line-height: 2.1rem;
  }
`;

export const LinksPanel = ({ children, onMouseEnter }) => {
  return <Panel onMouseEnter={onMouseEnter && onMouseEnter}>{children}</Panel>;
};
