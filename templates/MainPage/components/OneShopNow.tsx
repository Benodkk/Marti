import { ArrowButton } from "@/components/ArrowButton/ArrowButton";
import {
  StyledOneShopNow,
  StyledOneShopPhoto,
  StyledOneShopRight,
  StyledOneShopRightContent,
} from "../MainPage.styled";

interface OneShopNowProps {
  imageSrc: string;
  backgroundColor: string;
  label: string;
}

export const OneShopNow = ({
  imageSrc,
  backgroundColor,
  label,
}: OneShopNowProps) => {
  return (
    <StyledOneShopNow backgroundColor={backgroundColor}>
      <StyledOneShopPhoto src={imageSrc} />
      <StyledOneShopRight>
        <StyledOneShopRightContent>{label}</StyledOneShopRightContent>
        <ArrowButton>SHOP NOW</ArrowButton>
      </StyledOneShopRight>
    </StyledOneShopNow>
  );
};
