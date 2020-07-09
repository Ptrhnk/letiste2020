import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, config, animated } from "react-spring";

import LogoLetisteSvg from "components/logo/LogoLetisteSvg";
import SocialPanel from "components/socials/SocialPanel";
import { LinksPanel } from "components/links/LinksPanel";
import { Link } from "components/links/Link";
import { Letiste } from "components/letiste/Letiste";
import { globalWhite, globalBlack } from "constants/index";
import { XOXOPanel } from "components/XOXO/XOXOPanel";
import PartnersContainer from "components/partners/PartnersContainer";
import partners from "components/partners/partners";

const PageContainer = styled(animated.div)`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${globalBlack};
  color: ${globalWhite};
  z-index: 10000;

  @media (max-height: 500px) {
    position: absolute;
  }
  @media (max-width: 700px) {
    position: absolute;
  }
`;

// const black = "rgb(0,0,0)";
// const white = "rgb(210, 210, 210)";

export default function Home() {
  const [toggle, setToggle] = useState(true);

  const strobeAnim = useSpring({
    config: {
      tension: 250,
      friction: 20,
      mass: 1,
    },
    backgroundColor: toggle ? globalBlack : "white",
    color: toggle ? globalWhite : globalBlack,
  });

  useEffect(() => void setInterval(() => strobe(), 2000), []);

  const strobe = () => {
    setTimeout(() => {
      setToggle(false);
      setTimeout(() => {
        setToggle(true);
      }, Math.floor(Math.random() * 100 + 50));
    }, Math.floor(Math.random() * 10000 + 100));
  };

  return (
    <PageContainer style={strobeAnim}>
      <XOXOPanel text={"X0"} side={"left"} toggle={toggle} />
      <XOXOPanel text={"X0"} side={"right"} toggle={toggle} />
      <LinksPanel>
        <Link
          onMouseEnter={strobe}
          text={"Lístky"}
          link={"https://goout.net/cs/festivaly/letiste-x0x0/jmwsf/+offoq/"}
        />
        <Link
          onMouseEnter={strobe}
          text={"Událost"}
          link={"https://www.facebook.com/events/283634622785037/"}
        />
        <Link
          onMouseEnter={strobe}
          text={"Afterparty"}
          link={"https://www.facebook.com/events/621557531796933/"}
        />
      </LinksPanel>
      <LogoLetisteSvg />
      <Letiste toggle={toggle} text={"LETIŠTĚ"} />
      <SocialPanel />
      <PartnersContainer partners={partners} />
    </PageContainer>
  );
}
