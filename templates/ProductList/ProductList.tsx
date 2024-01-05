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
