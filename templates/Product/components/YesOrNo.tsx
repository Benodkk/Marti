import {
  StyledOneChoice,
  StyledOneChoiceColumn,
  StyledOneChoiceContainer,
  StyledYesOrNoContainer,
} from "../Product.styled";
import { StyledName } from "./OneDetail.styled";

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
  return (
    <StyledYesOrNoContainer>
      <StyledOneChoiceColumn>
        <StyledOneChoiceContainer onClick={firstOnClick} $active={!active}>
          {firstImage ? (
            <StyledOneChoice src={firstImage} />
          ) : (
            <StyledName>NO</StyledName>
          )}
        </StyledOneChoiceContainer>
        {firstImage && <StyledName>NO</StyledName>}
      </StyledOneChoiceColumn>
      <StyledOneChoiceColumn>
        <StyledOneChoiceContainer onClick={secondOnClick} $active={active}>
          {secondImage ? (
            <StyledOneChoice src={secondImage} />
          ) : (
            <StyledName>YES</StyledName>
          )}
        </StyledOneChoiceContainer>
        {secondImage && <StyledName>YES</StyledName>}
      </StyledOneChoiceColumn>
    </StyledYesOrNoContainer>
  );
};
