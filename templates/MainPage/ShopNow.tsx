import { useEffect } from "react";
import { StyledShopNowContainer } from "./MainPage.styled";
import { OneShopNow } from "./components/OneShopNow";
import ForMen from "@/assets/ForMen.png";
import ForWomen from "@/assets/ForWomen.png";

interface ShopNowProps {}

export const ShopNow = ({}: ShopNowProps) => {
  return (
    <StyledShopNowContainer>
      <OneShopNow backgroundColor="#C44370" imageSrc={ForMen.src} label="Men" />
      <OneShopNow
        backgroundColor="#75939E"
        imageSrc={ForWomen.src}
        label="Women"
      />
      <OneShopNow
        backgroundColor="#B1A270"
        imageSrc={ForMen.src}
        label="Women"
      />
    </StyledShopNowContainer>
  );
};
