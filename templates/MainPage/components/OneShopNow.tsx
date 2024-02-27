import { ArrowButton } from "@/components/ArrowButton/ArrowButton";
import {
  StyledOneShopNow,
  StyledOneShopPhoto,
  StyledOneShopRight,
  StyledOneShopRightContent,
} from "../MainPage.styled";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface OneShopNowProps {
  imageSrc: string;
  backgroundColor: string;
  label: string;
  onClick?: any;
}

export const OneShopNow = ({
  imageSrc,
  backgroundColor,
  label,
  onClick,
}: OneShopNowProps) => {
  const language = useSelector(selectLanguage);

  return (
    <StyledOneShopNow $backgroundColor={backgroundColor}>
      <StyledOneShopPhoto src={imageSrc} />
      <StyledOneShopRight>
        <StyledOneShopRightContent>{label}</StyledOneShopRightContent>
        <ArrowButton onClick={onClick}>
          {language == "pl" ? "ODKRYJ TERAZ" : "SHOP NOW"}
        </ArrowButton>
      </StyledOneShopRight>
    </StyledOneShopNow>
  );
};
