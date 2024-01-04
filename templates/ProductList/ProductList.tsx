import {
  ProductListContainer,
  StyledBodyContainer,
} from "./ProductList.styled";
import { ProductListHeader } from "./ProductListHeader";
import { ProductListBody } from "./ProductListBody";
import ForWomen from "@/assets/ForWomen.png";
import { ListFilters } from "./ListFilters";
import axios from "axios";
import { useEffect, useState } from "react";

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

interface ProductListProps {}

export const ProductList = ({}: ProductListProps) => {
  const [testState, setTestState] = useState<any>("");
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

  useEffect(() => {
    bebe();
  }, []);

  return (
    <ProductListContainer>
      <ProductListHeader
        color="#C44370"
        listType="Women"
        photoSource={ForWomen.src}
      />
      <StyledBodyContainer>
        <ListFilters />
        <ProductListBody />
      </StyledBodyContainer>
    </ProductListContainer>
  );
};
