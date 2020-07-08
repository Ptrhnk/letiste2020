import React from "react";
import styled from "styled-components";

import SocialIcon from "./SocialIcon";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-bottom: 1.1rem;
  padding-right: 1.1rem;

  border-radius: 0.9rem;
  /* border: 1px dashed pink; */

  transition: all 0.3s ease;

  :hover {
  }

  @media (max-width: 700px) {
    padding-bottom: 0.9rem;
    padding-right: 0.9rem;
  }
`;

const SocialButton = ({ social }) => {
  const getHref = () => {
    switch (social) {
      case "facebook":
        return "https://www.facebook.com/letistedisaster/";
      case "instagram":
        return "https://www.instagram.com/letistex0x0/";
      case "twitter":
        return "https://www.twitter.com/letistefest/";
    }
  };

  return (
    <Button href={getHref()} target="_blank">
      <SocialIcon social={social} />
    </Button>
  );
};

export default SocialButton;
