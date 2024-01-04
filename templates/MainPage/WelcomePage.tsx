import { StyledImage } from "@/components/helpers/Helpers.styled";
import {
  StyledGoldenCircleImage,
  StyledTitle,
  StyledTitleContainer,
  StyledUpTo,
  StyledWelcomePageText,
  StyledWelcomePageTextContainer,
  WelcomePageContainer,
  WelcomePageLeft,
  WelcomePageLeftContent,
  WelcomePageRight,
  WelcomePageRightContent,
} from "./MainPage.styled";

import GoldenLeaf from "@/assets/GoldenLeaf.svg";
import WelcomeWoman from "@/assets/WelcomeWoman.png";
import WelcomeSign from "@/assets/WelcomeSign.svg";
import { ArrowButton } from "@/components/ArrowButton/ArrowButton";
import GoldenCircle from "@/assets/GoldenCircle.png";

interface WelcomePageProps {}

export const WelcomePage = ({}: WelcomePageProps) => {
  return (
    <WelcomePageContainer>
      <WelcomePageLeft>
        <WelcomePageLeftContent>
          <StyledUpTo>UP TO 50% OFF YOUR ENTIRE ORDER</StyledUpTo>
          <StyledTitleContainer>
            <StyledTitle>Autumn</StyledTitle>
            <StyledTitle>Collection</StyledTitle>
          </StyledTitleContainer>

          <StyledWelcomePageTextContainer>
            <StyledWelcomePageText>
              Upgrade Your Autumn Sportswear with Our Exclusive Collection,
            </StyledWelcomePageText>
            <StyledWelcomePageText>
              where Fashion Meets Functionality!
            </StyledWelcomePageText>
          </StyledWelcomePageTextContainer>

          <ArrowButton>SHOW MORE</ArrowButton>
          <StyledGoldenCircleImage src={GoldenCircle.src} />
        </WelcomePageLeftContent>
      </WelcomePageLeft>
      <WelcomePageRight>
        <WelcomePageRightContent>
          <StyledImage
            $height="120px"
            src={GoldenLeaf.src}
            $position="relative"
            $top="50px"
            $left="50px"
            $zIndex={1}
          />
          <StyledImage
            $height="100%"
            src={WelcomeWoman.src}
            $position="relative"
            $left="0px"
            $zIndex={2}
          />
          <StyledImage
            $height="300px"
            src={WelcomeSign.src}
            $zIndex={3}
            $position="relative"
            $right="50px"
          />
        </WelcomePageRightContent>
      </WelcomePageRight>
    </WelcomePageContainer>
  );
};
