import React from "react";
import styled from "styled-components";

import { globalBorder, globalBlack } from "constants/index";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  margin: 1rem 0;

  z-index: 1000;
`;

const ImageBox = styled.div`
  width: 8rem;
  height: 3rem;

  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    width: 3rem;
    height: 1.4rem;
    margin: 0 0 0 1rem;
  }
  @media (max-width: 700px) {
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
