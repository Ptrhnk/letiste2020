import React from "react";
import styled from "styled-components";

import { globalBlue, globalWhite } from "constants/index";

const Anchor = styled.a`
  font-size: 1.8rem;
  color: ${globalBlue};
  margin: 0 1rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-bottom: 4px solid ${globalBlue};
  text-decoration: none;
  :hover {
    border-bottom: none;
    /* margin-bottom: 2rem; */
  }
  /* border: 1px dotted white; */
`;

export const Link = ({ link, text }) => {
  return (
    <Anchor href={link} target="_blank">
      {text}
    </Anchor>
  );
};
