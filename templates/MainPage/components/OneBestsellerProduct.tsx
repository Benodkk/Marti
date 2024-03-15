import { StyledDiscountPrice } from "@/templates/ProductList/ProductList.styled";
import {
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledOneProductPhotoContainer,
  StyledProductName,
  StyledProductPrize,
  StyledProductType,
} from "../MainPage.styled";
import { useRouter } from "next/router";

interface OneBestsellerProductProps {
  name: string;
  type: string;
  price: string;
  image: string;
  id: any;
  discountPrice?: any;
}

export const OneBestsellerProduct = ({
  name,
  type,
  price,
  image,
  id,
  discountPrice,
}: OneBestsellerProductProps) => {
  const router = useRouter();

  const pushToList = (product: any) => {
    router.push({
      pathname: `/product/SpecificProduct/`,
      query: { product: product },
    });
  };
  return (
    <StyledOneProduct>
      <StyledOneProductPhotoContainer>
        <StyledOneProductPhoto onClick={() => pushToList(id)} src={image} />
      </StyledOneProductPhotoContainer>
      <StyledProductType>{type}</StyledProductType>
      <StyledProductName onClick={() => pushToList(id)}>
        {name.toUpperCase()}
      </StyledProductName>

      <StyledProductPrize>
        {discountPrice ? (
          <>
            <div>{discountPrice}</div>{" "}
            <StyledDiscountPrice>{price}</StyledDiscountPrice>
          </>
        ) : (
          <div>{price}</div>
        )}
      </StyledProductPrize>
    </StyledOneProduct>
  );
};
