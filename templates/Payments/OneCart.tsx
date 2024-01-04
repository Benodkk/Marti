import { useState } from "react";
import {
  StyledActionRow,
  StyledAddToFavourite,
  StyledOneCart,
  StyledOneCartLeft,
  StyledOneCartRight,
  StyledOneProductPhoto,
  StyledProductCount,
  StyledProductDetail,
  StyledProductDetails,
  StyledProductDetailsContainer,
  StyledProductName,
  StyledProductNumber,
  StyledProductPrice,
  StyledRemove,
} from "./Payments.styled";
import BestsellersPhoto from "@/assets/BestSellersPhoto.png";

interface OneCartProps {}

export const OneCart = ({}: OneCartProps) => {
  const [count, setCount] = useState<number | "">(0);
  return (
    <StyledOneCart>
      <StyledOneCartLeft>
        <StyledOneProductPhoto src={BestsellersPhoto.src} />
        <StyledProductDetails>
          <StyledProductNumber>RF293</StyledProductNumber>
          <StyledProductName>North wolf bag</StyledProductName>
          <StyledProductDetailsContainer>
            <StyledProductDetail>Height: 10 inches</StyledProductDetail>
            <StyledProductDetail>Color: Black</StyledProductDetail>
            <StyledProductDetail>
              Composition: 100% calf leather
            </StyledProductDetail>
          </StyledProductDetailsContainer>{" "}
          <StyledActionRow>
            <StyledAddToFavourite>Add to favorites</StyledAddToFavourite>
            <StyledRemove>Remove</StyledRemove>
          </StyledActionRow>
        </StyledProductDetails>
      </StyledOneCartLeft>
      <StyledOneCartRight>
        <StyledProductCount
          onChange={(e: any) =>
            e.target.value > 0
              ? e.target.value.length < 3 && setCount(e.target.value)
              : setCount("")
          }
          value={count}
          type="number"
        />
        <StyledProductPrice>159,00 zł</StyledProductPrice>
      </StyledOneCartRight>
    </StyledOneCart>
  );
};
