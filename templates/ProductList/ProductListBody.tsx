import { MoonLoader } from "react-spinners";
import {
  StyledBodyList,
  StyledLoaderContainer,
  StyledProductsContainer,
} from "./ProductList.styled";
import { OneProductCart } from "./components/OneProductCart";
import { SortBy } from "./components/SortBy";

interface ProductListBodyProps {
  products: any;
  loading: boolean;
}

export const ProductListBody = ({
  products,
  loading,
}: ProductListBodyProps) => {
  return (
    <StyledBodyList>
      <SortBy></SortBy>
      {loading ? (
        <StyledLoaderContainer>
          <MoonLoader color="#000000" />
        </StyledLoaderContainer>
      ) : (
        <StyledProductsContainer>
          {products && products.length ? (
            products.map((product: any) => {
              return <OneProductCart product={product} />;
            })
          ) : (
            <div>no data</div>
          )}
        </StyledProductsContainer>
      )}
    </StyledBodyList>
  );
};
