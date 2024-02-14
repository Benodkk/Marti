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
import { useEffect } from "react";
import { getCategories } from "@/API/categories";
import defaultWelcomePageImage from "@/assets/defaultWelcomePageImage.png";
import { useRouter } from "next/router";
interface WelcomePageProps {
  linkId: string;
}

export const WelcomePage = ({ linkId }: WelcomePageProps) => {
  const router = useRouter();

  const pushToList = (category: any) => {
    // router.push({
    //   pathname: "/products",
    //   query: {
    //     category: category,
    //   },
    // });
  };

  return (
    <WelcomePageContainer $bgImage={defaultWelcomePageImage.src}>
      <WelcomePageLeft>
        <WelcomePageLeftContent>
          {/* <StyledUpTo>UP TO 50% OFF YOUR ENTIRE ORDER</StyledUpTo> */}
          <StyledTitleContainer>
            <StyledTitle $color={"#FFF"}>Marti Bikini</StyledTitle>
            <StyledTitle $color={"#FFF"}>Collection</StyledTitle>
          </StyledTitleContainer>

          <StyledWelcomePageTextContainer>
            <StyledWelcomePageText $color={"#FFF"}>
              Your lucky bikini created with passion!
            </StyledWelcomePageText>
          </StyledWelcomePageTextContainer>

          <ArrowButton onClick={() => pushToList(linkId)}>
            SHOW MORE
          </ArrowButton>
          <StyledGoldenCircleImage src={GoldenCircle.src} />
        </WelcomePageLeftContent>
      </WelcomePageLeft>
      <WelcomePageRight>
        <WelcomePageRightContent>
          <StyledImage
            $height="300px"
            src={WelcomeSign.src}
            $zIndex={3}
            $position="absolute"
            $right="0px"
            $bottom="10%"
          />
        </WelcomePageRightContent>
      </WelcomePageRight>
    </WelcomePageContainer>
  );
};
