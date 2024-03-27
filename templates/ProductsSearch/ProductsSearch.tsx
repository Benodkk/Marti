import {
  ProductListContainer,
  StyledBodyFilters,
} from "../ProductList/ProductList.styled";
import womenMain from "@/assets/womenMain.png";
import menMain from "@/assets/menMain.png";
import heelsMain from "@/assets/heelsMain.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchAllCat,
  fetchAllCategories,
  fetchAllProdWithPriceRange,
  fetchProductsByCategoryId,
  fetchSearchProducts,
} from "@/API/strapiConfig";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";
import { ProductListBody } from "../ProductList/ProductListBody";
import { ProductSearchList } from "./ProductSearchList";
import { Input } from "@/components/Input/Input";
import { translation } from "@/translation";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { StyledSearchRow, StyledBodyContainer } from "./ProductsSearch.styled";

interface ProductListProps {}

export default function ProductList({}: ProductListProps) {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const language = useSelector(selectLanguage);
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);
  const [searcInputValue, setSearcInputValue] = useState<any>("");

  const [products, setProducts] = useState<any>();

  useEffect(() => {
    if (router.query) {
      getProducts(router.query.search);
      setSearcInputValue(router.query.search);
    }
  }, [router]);

  const getProducts = async (name: any) => {
    setIsLoading(true);
    try {
      const response = await fetchSearchProducts(name);

      if (response || response == null) {
        setProducts(response);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductListContainer>
      <StyledBodyContainer>
        <StyledSearchRow>
          <Input
            type="text"
            value={searcInputValue}
            onChange={(e: any) => setSearcInputValue(e.target.value)}
            label={translation[language].search}
          />
          <div>
            <BlackButton onClick={() => getProducts(searcInputValue)}>
              {translation[language].search}
            </BlackButton>
          </div>
        </StyledSearchRow>

        <ProductSearchList products={products} loading={isLoading} />
      </StyledBodyContainer>
    </ProductListContainer>
  );
}
