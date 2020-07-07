import React from "react";
import styled from "styled-components";

import SocialIcon from "./SocialIcon";
import { globalBlack } from "../constants";

const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.7rem;
  margin-top: 0.8rem;
  background-color: black;
  border-radius: 0.9rem;

  transition: all 0.3s ease;

  :hover {
    background-color: ${globalBlack};
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
        return "https://www.facebook.com/events/829025523963205/";
      case "twitter":
        return "https://www.twitter.com/letistefest/";
      case "instagram":
        return "https://www.instagram.com/letistekarneval/";
      case "calendar":
        return "";
    }
  };

  return (
    <Button href={getHref()} target="_blank">
      <SocialIcon social={social} />
    </Button>
  );
};

export default SocialButton;
