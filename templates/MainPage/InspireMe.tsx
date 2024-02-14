import {
  StyledInspireMe,
  StyledInspireMePhotoContainer,
  StyledInspireMeTitleContainer,
  StyledMainPageSectionGold,
  StyledMainPageSectionTitle,
  StyledOneInspieMePhoto,
} from "./MainPage.styled";

import { FaInstagram } from "react-icons/fa";

import Inspire1 from "@/assets/inspire1.png";
import Inspire2 from "@/assets/inspire2.png";
import Inspire3 from "@/assets/inspire3.png";
import Inspire4 from "@/assets/inspire4.png";
import Inspire5 from "@/assets/inspire5.png";

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
        <StyledOneInspieMePhoto src={Inspire1.src} />
        <StyledOneInspieMePhoto src={Inspire2.src} />
        <StyledOneInspieMePhoto src={Inspire3.src} />
        <StyledOneInspieMePhoto src={Inspire4.src} />
        <StyledOneInspieMePhoto src={Inspire5.src} />
      </StyledInspireMePhotoContainer>
    </StyledInspireMe>
  );
};
