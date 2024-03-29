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
  apiValue: string;
  setApiValue: any;
}

export const ProductListBody = ({
  products,
  loading,
  apiValue,
  setApiValue,
}: ProductListBodyProps) => {
  return (
    <StyledBodyList>
      <SortBy apiValue={apiValue} setApiValue={setApiValue}></SortBy>
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
