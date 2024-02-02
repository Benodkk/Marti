import { BackButton } from "@/components/BackButton/BackButton";
import {
  StyledAbout,
  StyledAboutContainer,
  StyledAboutTitle,
  StyledHeaderPhoto,
  StyledTitleContainer,
} from "./About.styled";

import HeaderPhoto from "@/assets/NewReleases.png";

export const AboutTemplate = () => {
  return (
    <StyledAboutContainer>
      <StyledAbout>
        <StyledTitleContainer>
          {/* <BackButton /> */}
          <StyledAboutTitle>About us</StyledAboutTitle>
        </StyledTitleContainer>

        <StyledHeaderPhoto src={HeaderPhoto.src} />
      </StyledAbout>
    </StyledAboutContainer>
  );
};
