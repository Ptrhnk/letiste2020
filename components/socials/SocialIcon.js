import React from "react";
import styled from "styled-components";

import facebookIcon from "img/socials/facebook3.png";
import twitterIcon from "img/socials/twitter.png";
import instagramIcon from "img/socials/instagram.png";

const Image = styled.img`
  width: 2.3rem;
  height: 2.3rem;

  @media (max-width: 700px) {
    width: 1.3rem;
    height: 1.3rem;
  }
  @media (max-height: 500px) {
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
