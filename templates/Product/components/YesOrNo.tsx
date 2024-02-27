import {
  StyledOneChoice,
  StyledOneChoiceColumn,
  StyledOneChoiceContainer,
  StyledYesOrNoContainer,
} from "../Product.styled";
import { StyledName } from "./OneDetail.styled";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";

interface YesOrNoProps {
  firstOnClick?: any;
  firstImage?: string;
  secondOnClick?: any;
  secondImage?: string;
  active: boolean;
}

export const YesOrNo = ({
  firstOnClick,
  firstImage,
  secondOnClick,
  secondImage,
  active,
}: YesOrNoProps) => {
  const language = useSelector(selectLanguage);
  return (
    <StyledYesOrNoContainer>
      <StyledOneChoiceColumn>
        <StyledOneChoiceContainer onClick={firstOnClick} $active={!active}>
          {firstImage ? (
            <StyledOneChoice src={firstImage} />
          ) : (
            <StyledName>{translation[language].no.toUpperCase()}</StyledName>
          )}
        </StyledOneChoiceContainer>
        {firstImage && (
          <StyledName>{translation[language].no.toUpperCase()}</StyledName>
        )}
      </StyledOneChoiceColumn>
      <StyledOneChoiceColumn>
        <StyledOneChoiceContainer onClick={secondOnClick} $active={active}>
          {secondImage ? (
            <StyledOneChoice src={secondImage} />
          ) : (
            <StyledName>{translation[language].yes.toUpperCase()}</StyledName>
          )}
        </StyledOneChoiceContainer>
        {secondImage && (
          <StyledName>{translation[language].yes.toUpperCase()}</StyledName>
        )}
      </StyledOneChoiceColumn>
    </StyledYesOrNoContainer>
  );
};
