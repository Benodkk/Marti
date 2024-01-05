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

interface ProductListProps {}

export const ProductList = ({}: ProductListProps) => {
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
