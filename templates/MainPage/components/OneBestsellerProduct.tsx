import {
  StyledIconContainer,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledOneProductPhotoContainer,
  StyledProductName,
  StyledProductPrize,
  StyledProductType,
} from "../MainPage.styled";
import BestsellersPhoto from "@/assets/BestSellersPhoto.png";
import { useRouter } from "next/router";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";

import { selectCurrencyDetails } from "@/redux/currencySlice";

interface OneBestsellerProductProps {
  name: string;
  type: string;
  price: string;
  image: string;
  id: any;
}

export const OneBestsellerProduct = ({
  name,
  type,
  price,
  image,
  id,
}: OneBestsellerProductProps) => {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const router = useRouter();

  const pushToList = (product: any) => {
    router.push({
      pathname: `/product/${product}`,
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
        {price} {symbol}
      </StyledProductPrize>
    </StyledOneProduct>
  );
};
