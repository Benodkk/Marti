import { useEffect } from "react";
import { StyledShopNowContainer } from "./MainPage.styled";
import { OneShopNow } from "./components/OneShopNow";
import menMain from "@/assets/menMain.png";
import womenMain from "@/assets/womenMain.png";
import heelsMain from "@/assets/heelsMain.png";
import { useRouter } from "next/router";

interface ShopNowProps {
  womenLinkId: any;
  menLinkId: any;
  heelsLinkId: any;
}

export const ShopNow = ({
  womenLinkId,
  menLinkId,
  heelsLinkId,
}: ShopNowProps) => {
  const router = useRouter();

  const pushToList = (category: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: category,
      },
    });
  };

  return (
    <StyledShopNowContainer>
      <OneShopNow
        backgroundColor="#C44370"
        imageSrc={womenMain.src}
        label="Women"
        onClick={() => pushToList(womenLinkId)}
      />
      <OneShopNow
        backgroundColor="#75939E"
        imageSrc={menMain.src}
        label="Men"
        onClick={() => pushToList(menLinkId)}
      />
      <OneShopNow
        backgroundColor="#B1A270"
        imageSrc={heelsMain.src}
        label="Heels"
        onClick={() => pushToList(heelsLinkId)}
      />
    </StyledShopNowContainer>
  );
};
