import { StyledBodyList, StyledProductsContainer } from "./ProductList.styled";
import { OneProductCart } from "./components/OneProductCart";
import { SortBy } from "./components/SortBy";

interface ProductListBodyProps {}

export const ProductListBody = ({}: ProductListBodyProps) => {
  return (
    <StyledBodyList>
      <SortBy></SortBy>
      <StyledProductsContainer>
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
        <OneProductCart />
      </StyledProductsContainer>
    </StyledBodyList>
  );
};
