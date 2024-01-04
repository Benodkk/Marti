import {
  StyledWomanOptionsContainer,
  StyledCategoriesOptions,
  StyledBoldLink,
  StyledOneLinkColumn,
  StyledLink,
  StyledLinkContainer,
  StyledRealContent,
} from "./Header.styled";

interface WomanCategoriesProps {
  openCategories?: boolean;
}

export const WomanCategories = ({ openCategories }: WomanCategoriesProps) => {
  return (
    <StyledWomanOptionsContainer open={openCategories}>
      <StyledRealContent open={openCategories}>
        <StyledBoldLink $firstChild={true}>All products</StyledBoldLink>
        <StyledCategoriesOptions>
          <StyledOneLinkColumn>
            <StyledBoldLink $firstChild={true}>Bikini</StyledBoldLink>
            <StyledLinkContainer $firstChild={true}>
              <StyledLink>NPC Bikini</StyledLink>
              <StyledLink>Fitness Bikini</StyledLink>
              <StyledLink>Swimsuit</StyledLink>
            </StyledLinkContainer>
          </StyledOneLinkColumn>
          <StyledOneLinkColumn>
            <StyledBoldLink>Bikini</StyledBoldLink>
            <StyledLinkContainer>
              <StyledLink>NPC Bikini</StyledLink>
              <StyledLink>Fitness Bikini</StyledLink>
              <StyledLink>Swimsuit</StyledLink>
            </StyledLinkContainer>
          </StyledOneLinkColumn>
          <StyledOneLinkColumn>
            <StyledBoldLink>Bikini</StyledBoldLink>
            <StyledLinkContainer>
              <StyledLink>NPC Bikini</StyledLink>
              <StyledLink>Fitness Bikini</StyledLink>
              <StyledLink>Swimsuit</StyledLink>
            </StyledLinkContainer>
          </StyledOneLinkColumn>
          <StyledOneLinkColumn>
            <StyledBoldLink>Bikini</StyledBoldLink>
            <StyledLinkContainer $lastChild={true}>
              <StyledLink>NPC Bikini</StyledLink>
              <StyledLink>Fitness Bikini</StyledLink>
              <StyledLink>Swimsuit</StyledLink>
            </StyledLinkContainer>
          </StyledOneLinkColumn>
        </StyledCategoriesOptions>
      </StyledRealContent>
    </StyledWomanOptionsContainer>
  );
};
