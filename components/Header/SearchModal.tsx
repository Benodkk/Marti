import { IoIosClose } from "react-icons/io";
import {
  StyledInfoContaier,
  StyledInputContainer,
  StyledInputSearch,
  StyledLoaderContainer,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledProductName,
  StyledProductPrize,
  StyledProductType,
  StyledSearchClose,
  StyledSearchContainer,
  StyledSearchResult,
} from "./Header.styled";
import { translation } from "@/translation";
import { selectLanguage } from "@/redux/languageSlice";
import { useSelector } from "react-redux";
import { BlackButton } from "../BlackButton/BlackButton";
import { useEffect, useRef, useState } from "react";
import { fetchAllCat, fetchSearchProducts } from "@/API/strapiConfig";
import { selectCurrencyDetails } from "@/redux/currencySlice";
import { MoonLoader } from "react-spinners";
import { useClickOutside } from "@/hooks/clickOutside";
import { useRouter } from "next/router";
import { SearchBlackButton } from "../BlackButton/SearchBlackButton";
import { StyledDiscountPrice } from "@/templates/ProductList/ProductList.styled";

interface SearchModalProps {
  active: boolean;
  setActive: any;
}

export const SearchModal = ({ active, setActive }: SearchModalProps) => {
  const ref: any = useRef();
  const router = useRouter();

  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;
  const discountPriceKey = `price_${currency}_discount`;
  const language = useSelector(selectLanguage);

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [InputValue, setInputValue] = useState("");

  useClickOutside(ref, () => setActive(false));

  const getProducts = async (name: any) => {
    setLoading(true);
    try {
      const response = await fetchSearchProducts(name);

      if (response || response == null) {
        setProducts(response);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const findLowCategory = (categories: any) => {
    const name = categories.find(
      (category: any) => category.attributes.class == "bot"
    );
    return language == "pl" && name.attributes.name_pl
      ? name.attributes.name_pl
      : name.attributes.name;
  };

  function ImageComponent(imageUrl: any) {
    // Dodaj transformacje do URL-a obrazu
    const transformedImageUrl = imageUrl?.replace(
      "/upload/",
      "/upload/w_300,q_80/"
    );

    return transformedImageUrl;
  }

  const pushToList = (product: any) => {
    router.push({
      pathname: `/product/SpecificProduct/`,
      query: { product: product },
    });
  };

  return (
    <StyledSearchContainer active={active} ref={ref}>
      <StyledInputContainer>
        <StyledInputSearch
          value={InputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={translation[language].search}
        />
        <SearchBlackButton
          onClick={() =>
            router.push({
              pathname: "/ProductsSearch",
              query: {
                search: InputValue,
              },
            })
          }
        >
          {translation[language].search}
        </SearchBlackButton>
        <StyledSearchClose onClick={() => setActive(false)}>
          <IoIosClose size={40} />
        </StyledSearchClose>
      </StyledInputContainer>
      {/* <StyledSearchResult>
        {loading ? (
          <StyledLoaderContainer>
            <MoonLoader color="#000000" />
          </StyledLoaderContainer>
        ) : products == null ? (
          <StyledSearchClose>
            <div>No result</div>
          </StyledSearchClose>
        ) : (
          products?.map((product: any) => {
            return (
              <StyledOneProduct key={product.id}>
                <StyledOneProductPhoto
                  src={ImageComponent(
                    product.attributes?.main_photo?.data?.attributes?.url
                  )}
                  onClick={() => pushToList(product.id)}
                />
                <StyledInfoContaier>
                  <StyledProductType>
                    {findLowCategory(product.attributes.categories.data)}
                  </StyledProductType>
                  <StyledProductName onClick={() => pushToList(product.id)}>
                    {language == "pl" && product.attributes.name_pl
                      ? product.attributes.name_pl
                      : product.attributes.name}
                  </StyledProductName>
                  <StyledProductPrize>
                    {product.attributes[discountPriceKey] ? (
                      <>
                        <div>
                          {product.attributes[discountPriceKey] &&
                            (symbol == "$"
                              ? symbol +
                                parseFloat(
                                  product.attributes[discountPriceKey]
                                ).toFixed(2)
                              : parseFloat(
                                  product.attributes[discountPriceKey]
                                ).toFixed(2) + symbol)}
                        </div>
                        <StyledDiscountPrice>
                          {symbol == "$"
                            ? symbol +
                              parseFloat(product.attributes[priceKey]).toFixed(
                                2
                              )
                            : parseFloat(product.attributes[priceKey]).toFixed(
                                2
                              ) + symbol}
                        </StyledDiscountPrice>
                      </>
                    ) : (
                      <div>
                        {symbol == "$"
                          ? symbol +
                            parseFloat(product.attributes[priceKey]).toFixed(2)
                          : parseFloat(product.attributes[priceKey]).toFixed(
                              2
                            ) + symbol}
                      </div>
                    )}
                  </StyledProductPrize>
                </StyledInfoContaier>
              </StyledOneProduct>
            );
          })
        )}
      </StyledSearchResult> */}
    </StyledSearchContainer>
  );
};
