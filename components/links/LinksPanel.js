import React from "react";
import styled from "styled-components";

const Panel = styled.div`
  position: absolute;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* line-height: 3rem; */
  top: 8%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10000;
  /* border: 1px dotted white; */
`;

export const LinksPanel = ({ children, onMouseEnter }) => {
  return <Panel onMouseEnter={onMouseEnter && onMouseEnter}>{children}</Panel>;
};
