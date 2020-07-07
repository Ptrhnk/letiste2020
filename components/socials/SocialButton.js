import React from "react";
import styled from "styled-components";

import SocialIcon from "./SocialIcon";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem;

  border-radius: 0.9rem;
  /* border: 1px dashed pink; */

  transition: all 0.3s ease;

  :hover {
  }

  @media (max-width: 700px) {
    margin-right: 0.6rem;
    padding: 0.6rem;
  }
`;

const SocialButton = ({ social }) => {
  const getHref = () => {
    switch (social) {
      case "facebook":
        return "https://www.facebook.com/letistedisaster/";
      case "instagram":
        return "https://www.instagram.com/letistekarneval/";
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
