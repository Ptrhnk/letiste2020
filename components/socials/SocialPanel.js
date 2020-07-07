import React from "react";
import styled from "styled-components";

import SocialButton from "./SocialButton";

const Socials = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;
  justify-self: flex-end;
  margin-left: 0.8rem;
  animation-fill-mode: backwards;
  animation-delay: 7.6s;
  z-index: 10000;

  @media (max-width: 700px) {
    left: 0;
    flex-direction: row;
  }
`;

const SocialPanel = () => {
  return (
    <Socials>
      <SocialButton social={"facebook"} />
      <SocialButton social={"instagram"} />
      {/* <SocialButton social={"twitter"} /> */}
    </Socials>
  );
};

export default SocialPanel;
