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
import { useEffect, useState } from "react";
import { getCategories } from "@/API/categories";
import defaultWelcomePageImage from "@/assets/defaultWelcomePageImage.png";
import { useRouter } from "next/router";
import { fetchWelcomePageContent } from "@/API/strapiConfig";
interface WelcomePageProps {
  linkId: string;
}

export const WelcomePage = ({ linkId }: WelcomePageProps) => {
  const router = useRouter();
  const [content, setContent] = useState<any>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data: any = await fetchWelcomePageContent();
    if (data) setContent(data);
  };

  const pushToList = (category: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
      },
    });
  };

  return (
    <WelcomePageContainer
      $bgImage={
        content && content.attributes?.photo.data
          ? process.env.NEXT_PUBLIC_STRAPIBASEURL +
            content.attributes.photo.data[0].attributes.url
          : defaultWelcomePageImage.src
      }
    >
      <WelcomePageLeft>
        <WelcomePageLeftContent>
          {/* <StyledUpTo>UP TO 50% OFF YOUR ENTIRE ORDER</StyledUpTo> */}
          <StyledTitleContainer>
            <StyledTitle $color={"#FFF"}>
              {content && content.attributes.title}
            </StyledTitle>
          </StyledTitleContainer>

          <StyledWelcomePageTextContainer>
            <StyledWelcomePageText $color={"#FFF"}>
              {content && content.attributes.first_line}
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
