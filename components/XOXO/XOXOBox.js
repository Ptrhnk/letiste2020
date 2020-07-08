import React from "react";
import styled from "styled-components";

import { globalBlue, globalWhite } from "constants/index";

const Box = styled.div`
  margin: 0 7rem;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${globalWhite};
  font-weight: 100;
  font-family: "Roboto", sans-serif;
  /* border: 1px dotted pink; */

  @media (max-width: 1000px) {
    font-size: 5rem;
    margin: 0 4rem;
  }
  @media (max-width: 700px) {
    font-size: 3.5rem;
    margin: 0 2rem;
  }
`;

export const XOXOBox = ({ letter }) => {
  return <Box>{letter}</Box>;
};
