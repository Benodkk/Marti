import { MoonLoader } from "react-spinners";
import { OneProductCart } from "../ProductList/components/OneProductCart";
import {
  StyledBodyList,
  StyledLoaderContainer,
  StyledProductsContainer,
} from "./ProductsSearch.styled";

interface ProductSearchListProps {
  products: any;
  loading: boolean;
}

export const ProductSearchList = ({
  products,
  loading,
}: ProductSearchListProps) => {
  return (
    <StyledBodyList>
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
