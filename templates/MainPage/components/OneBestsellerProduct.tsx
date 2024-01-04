import {
  StyledIconContainer,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledProductName,
  StyledProductPrize,
  StyledProductType,
} from "../MainPage.styled";
import BestsellersPhoto from "@/assets/BestSellersPhoto.png";
import { AiOutlineShopping } from "react-icons/ai";

interface OneBestsellerProductProps {}

export const OneBestsellerProduct = ({}: OneBestsellerProductProps) => {
  return (
    <StyledOneProduct>
      <StyledOneProductPhoto src={BestsellersPhoto.src} />
      <StyledProductType>WOMEN FITNESS</StyledProductType>
      <StyledProductName>Classic Leggings</StyledProductName>
      <StyledProductPrize>159,00 zł</StyledProductPrize>
      <StyledIconContainer>
        <AiOutlineShopping size={20} color="white" />
      </StyledIconContainer>
    </StyledOneProduct>
  );
};
