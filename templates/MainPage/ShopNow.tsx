import { StyledShopNowContainer } from "./MainPage.styled";
import { OneShopNow } from "./components/OneShopNow";
import ForMen from "@/assets/ForMen.png";
import ForWomen from "@/assets/ForWomen.png";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

interface ShopNowProps {}

export const ShopNow = ({}: ShopNowProps) => {
  const bebe = async () => {
    const api = new WooCommerceRestApi({
      url: "https://martibikini.com",
      consumerKey: "ck_89664f145338d0c58c27786112f1ad59ffd7d92a",
      consumerSecret: "cs_36b77b72051fa130eba78fd8898c5d25a54e2e81",
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
