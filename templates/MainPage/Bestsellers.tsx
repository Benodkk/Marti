import { StyledSmallGoldText } from "@/components/helpers/Helpers.styled";
import {
  StyledBestsellers,
  StyledBestsellersHeader,
  StyledBestsellersHeaderRight,
  StyledMainPageSectionTitle,
  StyledMoreProductsButtonCotnainer,
  StyledOneBestsellersHeaderType,
  StyledOneBestsellersHeaderTypeGold,
  StyledOneProduct,
  StyledOneProductPhoto,
  StyledProductsContainer,
} from "./MainPage.styled";

import BestsellersPhoto from "@/assets/BestSellersPhoto.png";
import { OneBestsellerProduct } from "./components/OneBestsellerProduct";
import { ArrowButton } from "@/components/ArrowButton/ArrowButton";
import MediaQuery from "react-responsive";
import { reactDevice } from "@/styles/deviceWith";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProductsByCategoriesId } from "@/API/product";
import { MoonLoader } from "react-spinners";
import { Loader } from "@/components/Loader/Loader";
import { fetchBestsellerTitle } from "@/API/strapiConfig";

import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { selectCurrencyDetails } from "@/redux/currencySlice";

interface BestsellersProps {
  bestsellers: any;
}

export const Bestsellers = ({ bestsellers }: BestsellersProps) => {
  const { currency, symbol } = useSelector(selectCurrencyDetails);
  const priceKey = `price_${currency}`;

  const language = useSelector(selectLanguage);
  const router = useRouter();

  // bestsellers lists
  const [currentBestsellers, setCurrentBestsellers] = useState<any>();
  const [bestsellerTitle, setBestsellerTitle] = useState<any>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    setCurrentBestsellers(bestsellers[0]);
  }, [bestsellers]);

  const fetch = async () => {
    const data: any = await fetchBestsellerTitle();
    if (data) setBestsellerTitle(data);
  };

  const pushToList = (id: any) => {
    router.push({
      pathname: "/products",
      query: {
        category: id,
      },
    });
  };
  const findLowCategory = (categories: any) => {
    const name = categories.find(
      (category: any) => category.attributes.class == "bot"
    );
    return language == "pl" && name.attributes.name_pl
      ? name.attributes.name_pl
      : name.attributes.name;
  };

  return (
    <StyledBestsellers>
      <StyledSmallGoldText>
        {bestsellerTitle &&
        language == "pl" &&
        bestsellerTitle.attributes.label_pl
          ? bestsellerTitle.attributes.label_pl.toUpperCase()
          : bestsellerTitle?.attributes.label.toUpperCase()}
      </StyledSmallGoldText>
      <StyledBestsellersHeader>
        <StyledMainPageSectionTitle>
          {bestsellerTitle &&
          language == "pl" &&
          bestsellerTitle.attributes.title_pl
            ? bestsellerTitle.attributes.title_pl
            : bestsellerTitle?.attributes.title}
        </StyledMainPageSectionTitle>
        <StyledBestsellersHeaderRight>
          <MediaQuery minWidth={reactDevice.desktop.minWidth}>
            {bestsellers.map((best: any) => {
              return (
                <StyledOneBestsellersHeaderType
                  $active={currentBestsellers == best}
                  onClick={() => {
                    setCurrentBestsellers(best);
                  }}
                >
                  {language == "pl" && best.attributes.name_pl
                    ? best.attributes.name_pl
                    : best.attributes.name}
                </StyledOneBestsellersHeaderType>
              );
            })}
          </MediaQuery>
        </StyledBestsellersHeaderRight>
      </StyledBestsellersHeader>

      <StyledProductsContainer>
        {loading ? (
          <Loader />
        ) : (
          currentBestsellers &&
          currentBestsellers.attributes.products.data
            .slice(0, 4)
            .map((product: any) => {
              return (
                <OneBestsellerProduct
                  name={
                    language == "pl" && product.attributes.name_pl
                      ? product.attributes.name_pl
                      : product.attributes.name
                  }
                  type={findLowCategory(product.attributes.categories.data)}
                  price={parseFloat(product.attributes[priceKey]).toFixed(2)}
                  image={product.attributes?.main_photo?.data?.attributes?.url}
                  id={product.id}
                  key={product.id}
                />
              );
            })
        )}
      </StyledProductsContainer>
      <StyledMoreProductsButtonCotnainer>
        <ArrowButton
          onClick={() =>
            currentBestsellers && pushToList(currentBestsellers.id)
          }
        >
          {language == "pl" ? "POKAŻ WIĘCEJ" : "SHOW MORE PRODUCTS"}
        </ArrowButton>
      </StyledMoreProductsButtonCotnainer>
    </StyledBestsellers>
  );
};
