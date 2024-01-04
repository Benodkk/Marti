import {
  StyledListHeaderPhoto,
  StyledListHeaderTitle,
  StyledListHeaderTitleContainer,
  StyledProductListHeader,
  StyledProductListHeaderContainer,
} from "./ProductList.styled";

interface ProductListHeaderProps {
  listType: string;
  photoSource: string;
  color: string;
}

export const ProductListHeader = ({
  listType,
  photoSource,
  color,
}: ProductListHeaderProps) => {
  return (
    <StyledProductListHeaderContainer $backgroundColor={color}>
      <StyledProductListHeader>
        <StyledListHeaderPhoto src={photoSource} />
        <StyledListHeaderTitleContainer>
          {listType.split(" ").map((word) => {
            return <StyledListHeaderTitle>{word}</StyledListHeaderTitle>;
          })}
        </StyledListHeaderTitleContainer>
      </StyledProductListHeader>
    </StyledProductListHeaderContainer>
  );
};
