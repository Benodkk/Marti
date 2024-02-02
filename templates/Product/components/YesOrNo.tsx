import {
  StyledOneChoice,
  StyledOneChoiceColumn,
  StyledOneChoiceContainer,
  StyledYesOrNoContainer,
} from "../Product.styled";
import { StyledName } from "./OneDetail.styled";

interface YesOrNoProps {
  firstOnClick?: any;
  firstImage: string;
  secondOnClick?: any;
  secondImage: string;
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
        <StyledOneChoiceContainer $active={!active}>
          <StyledOneChoice onClick={firstOnClick} src={firstImage} />
        </StyledOneChoiceContainer>
        <StyledName>NO</StyledName>
      </StyledOneChoiceColumn>
      <StyledOneChoiceColumn>
        <StyledOneChoiceContainer $active={active}>
          <StyledOneChoice onClick={secondOnClick} src={secondImage} />
        </StyledOneChoiceContainer>
        <StyledName>YES</StyledName>
      </StyledOneChoiceColumn>
    </StyledYesOrNoContainer>
  );
};
