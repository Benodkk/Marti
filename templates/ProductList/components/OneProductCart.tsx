import {
  StyledFavourite,
  StyledOneProductCart,
  StyledOneProductName,
  StyledOneProductPhoto,
  StyledOneProductPhotoContainer,
  StyledOneProductPrice,
  StyledOneProductRedLabel,
  StyledOneProductShortDesc,
} from "../ProductList.styled";

import RedHeart from "@/assets/RedHeart.svg";
import GreyHeart from "@/assets/RedHeart.svg";
// dev assets

import TestPhoto from "@/assets/BestSellersPhoto.png";
import { useRouter } from "next/router";

interface OneProductCartProps {
  product: any;
}

export const OneProductCart = ({ product }: OneProductCartProps) => {
  const router = useRouter();

  const pushToProduct = (product: any) => {
    router.push({
      pathname: `/product/${product}`,
    });
  };
  return (
    <StyledOneProductCart>
      {/* <StyledFavourite src={RedHeart.src} /> */}
      <StyledOneProductPhotoContainer>
        <StyledOneProductPhoto
          onClick={() => pushToProduct(product.id)}
          src={product.images.length > 0 && product.images[0].src}
        />
      </StyledOneProductPhotoContainer>

      {/* <StyledOneProductRedLabel>New In</StyledOneProductRedLabel> */}
      <StyledOneProductName onClick={() => pushToProduct(product.id)}>
        {product.name.toUpperCase()}
      </StyledOneProductName>
      <StyledOneProductShortDesc>
        A piece of short description goes in here
      </StyledOneProductShortDesc>
      <StyledOneProductPrice>
        {parseFloat(product.price).toFixed(2)} zł
      </StyledOneProductPrice>
    </StyledOneProductCart>
  );
};
