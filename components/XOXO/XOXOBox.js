import React from "react";
import styled from "styled-components";

import { globalBlue, globalWhite } from "constants/index";

const Box = styled.div`
  margin: 0 10rem;
  font-size: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${globalWhite};
  /* border: 1px dotted pink; */
`;

export const XOXOBox = ({ letter }) => {
  return <Box>{letter}</Box>;
};
