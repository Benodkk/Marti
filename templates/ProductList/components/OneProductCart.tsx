import {
  StyledDiscountPrice,
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

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";

interface OneProductCartProps {
  product: any;
}

export const OneProductCart = ({ product }: OneProductCartProps) => {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const discountPriceKey = `price_${currency}_discount`;
  const language = useSelector(selectLanguage);
  const router = useRouter();

  function ImageComponent(imageUrl: any) {
    // Dodaj transformacje do URL-a obrazu
    if (imageUrl) {
      const transformedImageUrl = imageUrl.replace(
        "/upload/",
        "/upload/w_400,q_80/"
      );

      return transformedImageUrl;
    }
  }

  const pushToProduct = (product: any) => {
    router.push({
      pathname: `/product/SpecificProduct/`,
      query: { product: product },
    });
  };

  return (
    <StyledOneProductCart>
      {/* <StyledFavourite src={RedHeart.src} /> */}
      <StyledOneProductPhotoContainer>
        <StyledOneProductPhoto
          onClick={() => pushToProduct(product.id)}
          src={ImageComponent(
            product?.attributes.main_photo?.data?.attributes.url
          )}
        />
      </StyledOneProductPhotoContainer>

      {/* <StyledOneProductRedLabel>New In</StyledOneProductRedLabel> */}
      <StyledOneProductName onClick={() => pushToProduct(product.id)}>
        {language == "pl" && product.attributes.name_pl
          ? product.attributes.name_pl.toUpperCase()
          : product.attributes.name.toUpperCase()}
      </StyledOneProductName>
      {/* <StyledOneProductShortDesc>
        A piece of short description goes in here
      </StyledOneProductShortDesc> */}
      <StyledOneProductPrice>
        {product.attributes[discountPriceKey] ? (
          <>
            <div>
              {product.attributes[discountPriceKey] &&
                (symbol == "$"
                  ? symbol +
                    parseFloat(product.attributes[discountPriceKey]).toFixed(2)
                  : parseFloat(product.attributes[discountPriceKey]).toFixed(
                      2
                    ) + symbol)}
            </div>
            <StyledDiscountPrice>
              {symbol == "$"
                ? symbol + parseFloat(product.attributes[priceKey]).toFixed(2)
                : parseFloat(product.attributes[priceKey]).toFixed(2) + symbol}
            </StyledDiscountPrice>
          </>
        ) : (
          <div>
            {symbol == "$"
              ? symbol + parseFloat(product.attributes[priceKey]).toFixed(2)
              : parseFloat(product.attributes[priceKey]).toFixed(2) + symbol}
          </div>
        )}
      </StyledOneProductPrice>
    </StyledOneProductCart>
  );
};
