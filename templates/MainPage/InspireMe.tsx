import {
  StyledInspireMe,
  StyledInspireMePhotoContainer,
  StyledInspireMeTitleContainer,
  StyledMainPageSectionGold,
  StyledMainPageSectionTitle,
  StyledOneInspieMePhoto,
} from "./MainPage.styled";

import { FaInstagram } from "react-icons/fa";

import InspireMePhoto from "@/assets/InspireMePhotoTest.png";

interface InspireMeProps {}

export const InspireMe = ({}: InspireMeProps) => {
  return (
    <StyledInspireMe>
      <StyledInspireMeTitleContainer>
        <StyledMainPageSectionTitle>Inspire me</StyledMainPageSectionTitle>
        <FaInstagram size={35} color="#caa871" />
        <StyledMainPageSectionGold>#MartiBikini</StyledMainPageSectionGold>
      </StyledInspireMeTitleContainer>
      <StyledInspireMePhotoContainer>
        <StyledOneInspieMePhoto src={InspireMePhoto.src} />
        <StyledOneInspieMePhoto src={InspireMePhoto.src} />
        <StyledOneInspieMePhoto src={InspireMePhoto.src} />
        <StyledOneInspieMePhoto src={InspireMePhoto.src} />
        <StyledOneInspieMePhoto src={InspireMePhoto.src} />
      </StyledInspireMePhotoContainer>
    </StyledInspireMe>
  );
};
