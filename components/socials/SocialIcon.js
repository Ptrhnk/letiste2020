import React from "react";
import styled from "styled-components";

import facebookIcon from "../img/social_icons/facebook3.png";
import twitterIcon from "../img/social_icons/twitter.png";
import instagramIcon from "../img/social_icons/instagram.png";

const Image = styled.img`
  width: 1.6rem;
  height: 1.6rem;

  @media (max-width: 700px) {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

const SocialIcon = ({ social }) => {
  const getIcon = () => {
    switch (social) {
      case "facebook":
        return facebookIcon;
      case "twitter":
        return twitterIcon;
      case "instagram":
        return instagramIcon;
    }
  };

  return <Image src={getIcon()} alt={social} />;
};

export default SocialIcon;
