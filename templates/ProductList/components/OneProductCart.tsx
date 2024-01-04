import {
  StyledFavourite,
  StyledOneProductCart,
  StyledOneProductName,
  StyledOneProductPhoto,
  StyledOneProductRedLabel,
  StyledOneProductShortDesc,
} from "../ProductList.styled";

import RedHeart from "@/assets/RedHeart.svg";
import GreyHeart from "@/assets/RedHeart.svg";
// dev assets

import TestPhoto from "@/assets/BestSellersPhoto.png";

interface OneProductCartProps {}

export const OneProductCart = ({}: OneProductCartProps) => {
  return (
    <StyledOneProductCart>
      <StyledFavourite src={RedHeart.src} />
      <StyledOneProductPhoto src={TestPhoto.src} />
      <StyledOneProductRedLabel>New In</StyledOneProductRedLabel>
      <StyledOneProductName>Bikini top</StyledOneProductName>
      <StyledOneProductShortDesc>
        A piece of short description goes in here
      </StyledOneProductShortDesc>
      <StyledOneProductName>150,00zł</StyledOneProductName>
    </StyledOneProductCart>
  );
};
