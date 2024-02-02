import {
  StyledContactCol,
  StyledContactGroup,
  StyledContactRows,
  StyledCopyright,
  StyledCopyrightContainer,
  StyledFooter,
  StyledFooterLinksCol,
  StyledFooterLinksContainer,
  StyledFooterLinksTitle,
  StyledFooterPhotoContainer,
  StyledFooterText,
  StyledFooterTitleContainer,
  StyledGoldenCircle,
  StyledOneFooterLink,
  StyledOneFooterPhoto,
} from "./Footer.styled";

import { FaInstagram } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume, FaRegEnvelope } from "react-icons/fa6";

import Inspire1 from "@/assets/inspire1.png";
import Inspire2 from "@/assets/inspire2.png";
import Inspire3 from "@/assets/inspire3.png";
import Inspire4 from "@/assets/inspire4.png";
import Inspire5 from "@/assets/inspire5.png";
import {
  StyledMainPageSectionGold,
  StyledMainPageSectionTitle,
} from "@/templates/MainPage/MainPage.styled";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <StyledFooter>
      <StyledFooterTitleContainer>
        <StyledMainPageSectionTitle>Inspire me</StyledMainPageSectionTitle>
        <FaInstagram size={35} color="#caa871" />
        <StyledMainPageSectionGold>#MartiBikini</StyledMainPageSectionGold>
      </StyledFooterTitleContainer>
      <StyledFooterPhotoContainer>
        <StyledOneFooterPhoto src={Inspire1.src} />
        <StyledOneFooterPhoto src={Inspire2.src} />
        <StyledOneFooterPhoto src={Inspire3.src} />
        <StyledOneFooterPhoto src={Inspire4.src} />
        <StyledOneFooterPhoto src={Inspire5.src} />
      </StyledFooterPhotoContainer>
      <StyledFooterLinksContainer>
        <StyledFooterText>
          Our online store is all about empowering your fitness journey, with
          quality bodybuilding attire and accessories. We're not just about the
          products; we're about the people who wear them.
        </StyledFooterText>
        <StyledFooterLinksCol>
          <StyledFooterLinksTitle>Customer care</StyledFooterLinksTitle>
          <StyledOneFooterLink>Sign in</StyledOneFooterLink>
          <StyledOneFooterLink>Buyer Protection</StyledOneFooterLink>
          <StyledOneFooterLink>Payment Options</StyledOneFooterLink>
          <StyledOneFooterLink>Shipping Policy</StyledOneFooterLink>
          <StyledOneFooterLink>Return Policy</StyledOneFooterLink>
        </StyledFooterLinksCol>
        <StyledFooterLinksCol>
          <StyledFooterLinksTitle>Informations</StyledFooterLinksTitle>
          <StyledOneFooterLink>About Us</StyledOneFooterLink>
          <StyledOneFooterLink>News</StyledOneFooterLink>
        </StyledFooterLinksCol>
        <StyledContactCol>
          <StyledFooterLinksTitle>Contact info</StyledFooterLinksTitle>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaLocationDot color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>ul. Narutowicza 124</div>
              <div>Warszawa, 00-111</div>
            </StyledContactRows>
          </StyledContactGroup>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaPhoneVolume color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>tel.: 680 120 120</div>
              <div>tel.: 122 120 120</div>
            </StyledContactRows>
          </StyledContactGroup>
          <StyledContactGroup>
            <StyledGoldenCircle>
              <FaRegEnvelope color="white" size={16} />
            </StyledGoldenCircle>
            <StyledContactRows>
              <div>emailmail@mail.com</div>
              <div>another@mail.com</div>
            </StyledContactRows>
          </StyledContactGroup>
        </StyledContactCol>
      </StyledFooterLinksContainer>
      <StyledCopyrightContainer>
        <StyledCopyright>
          Copyright © 2023. All rights reserved.
        </StyledCopyright>
      </StyledCopyrightContainer>
    </StyledFooter>
  );
};

export default Footer;
