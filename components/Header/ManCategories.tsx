import {
  StyledWomanOptionsContainer,
  StyledCategoriesOptions,
  StyledBoldLink,
  StyledOneLinkColumn,
  StyledLink,
  StyledLinkContainer,
  StyledRealContentMan,
} from "./Header.styled";

interface ManCategoriesProps {
  openCategories?: boolean;
}

export const ManCategories = ({ openCategories }: ManCategoriesProps) => {
  return (
    <StyledWomanOptionsContainer open={openCategories}>
      <StyledRealContentMan open={openCategories}>
        <StyledBoldLink $oneChild={true}>All products</StyledBoldLink>
        <StyledCategoriesOptions>
          <StyledOneLinkColumn>
            <StyledBoldLink $oneChild={true}>Bikini</StyledBoldLink>
            <StyledLinkContainer $oneChild={true}>
              <StyledLink>NPC Bikini</StyledLink>
              <StyledLink>Fitness Bikini</StyledLink>
              <StyledLink>Swimsuit</StyledLink>
            </StyledLinkContainer>
          </StyledOneLinkColumn>
        </StyledCategoriesOptions>
      </StyledRealContentMan>
    </StyledWomanOptionsContainer>
  );
};
