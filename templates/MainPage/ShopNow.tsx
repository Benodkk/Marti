import { useEffect } from "react";
import { StyledShopNowContainer } from "./MainPage.styled";
import { OneShopNow } from "./components/OneShopNow";
import ForMen from "@/assets/ForMen.png";
import ForWomen from "@/assets/ForWomen.png";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

interface ShopNowProps {}

export const ShopNow = ({}: ShopNowProps) => {
  const bebe = async () => {
    const api = new WooCommerceRestApi({
      url: "http://panel.martibikini.com",
      consumerKey: "ck_0d62184ebd8b521eee92dc372b9dea9fb1461fe4",
      consumerSecret: "cs_1caae09f86e2c00f474c08cf1f262ceadeb307ce",
      version: "wc/v3",
    });
    api
      .get("products")
      .then((response: any) => {
        // Log the response data to the console
        console.log(response.data);
      })
      .catch((error: any) => {
        // Log the error response data to the console
        console.log(error);
      });
  };
  useEffect(() => {
    bebe();
  }, []);
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
