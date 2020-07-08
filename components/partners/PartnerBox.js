import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "constants/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: -6rem;

  /* border: 1px dotted blue; */

  z-index: 1000;
`;

const ImageBox = styled.div`
  width: 12rem;
  height: 3rem;

  /* border: 1px dotted pink; */

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 9rem;
    height: 8rem;
  }
`;

const Name = styled.h1`
  font-size: 0.9rem;
  font-weight: 500rem;
`;

const PartnerBox = ({ partner }, key) => {
  const { name, image } = partner;

  return (
    <>
      <Container key={key}>{image && <ImageBox image={image} />}</Container>
    </>
  );
};

export default PartnerBox;
