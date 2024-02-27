import { useEffect } from "react";
import { StyledShopNowContainer } from "./MainPage.styled";
import { OneShopNow } from "./components/OneShopNow";
import menMain from "@/assets/menMain.png";
import womenMain from "@/assets/womenMain.png";
import heelsMain from "@/assets/heelsMain.png";
import { useRouter } from "next/router";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

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
  const language = useSelector(selectLanguage);
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
        label={language == "pl" ? "Kobiety" : "Women"}
        onClick={() => pushToList(womenLinkId)}
      />
      <OneShopNow
        backgroundColor="#75939E"
        imageSrc={menMain.src}
        label={language == "pl" ? "Mężczyźni" : "Men"}
        onClick={() => pushToList(menLinkId)}
      />
      <OneShopNow
        backgroundColor="#B1A270"
        imageSrc={heelsMain.src}
        label={language == "pl" ? "Buty" : "Heels"}
        onClick={() => pushToList(heelsLinkId)}
      />
    </StyledShopNowContainer>
  );
};
