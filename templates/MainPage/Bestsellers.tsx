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

interface BestsellersProps {
  womenLinkId: any;
  menLinkId: any;
  accesoriesLinkId: any;
  bestsellersLinkId: any;
  underCategories: any;
}

export const Bestsellers = ({
  womenLinkId,
  menLinkId,
  accesoriesLinkId,
  bestsellersLinkId,
  underCategories,
}: BestsellersProps) => {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState<any>("women");

  // bestsellers lists
  const [womenBestsellers, setWomenBestsellers] = useState<any>();
  const [menBestsellers, setMenBestsellers] = useState<any>();
  const [accesoriesBestsellers, setAccesoriesBestsellers] = useState<any>();

  const [currentBestsellers, setCurrentBestsellers] = useState<any>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, [bestsellersLinkId]);

  const getProducts = async () => {
    setLoading(true);
    try {
      if (bestsellersLinkId) {
        const bestsellers: any = await getProductsByCategoriesId(
          bestsellersLinkId
        );
        const womenBestsellers = bestsellers.filter((product: any) =>
          product.categories.some((category: any) => category.id == womenLinkId)
        );
        const menBestsellers = bestsellers.filter((product: any) =>
          product.categories.some((category: any) => category.id == menLinkId)
        );
        const accesoriesBestsellers = bestsellers.filter((product: any) =>
          product.categories.some(
            (category: any) => category.id == accesoriesLinkId
          )
        );
        setWomenBestsellers(womenBestsellers);
        setMenBestsellers(menBestsellers);
        setAccesoriesBestsellers(accesoriesBestsellers);
        setCurrentBestsellers(womenBestsellers);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const findCommonElementByid = (array1: any, array2: any) => {
    for (let item1 of array1) {
      const foundItem = array2.find((item2: any) => item2.id === item1.id);
      console.log(foundItem);

      if (foundItem) {
        return foundItem.name;
      }
    }
    return null;
  };

  const pushToList = () => {
    const category =
      activeCategory == "women"
        ? womenLinkId
        : activeCategory == "men"
        ? menLinkId
        : accesoriesLinkId;

    router.push({
      pathname: "/products",
      query: {
        category: category,
      },
    });
  };

  return (
    <StyledBestsellers>
      <StyledSmallGoldText>NEW COLLECTION 2024</StyledSmallGoldText>
      <StyledBestsellersHeader>
        <StyledMainPageSectionTitle>Bestsellers</StyledMainPageSectionTitle>
        <StyledBestsellersHeaderRight>
          <MediaQuery minWidth={reactDevice.desktop.minWidth}>
            <StyledOneBestsellersHeaderType
              $active={activeCategory == "women"}
              onClick={() => {
                setActiveCategory("women");
                setCurrentBestsellers(womenBestsellers);
              }}
            >
              women
            </StyledOneBestsellersHeaderType>
            <StyledOneBestsellersHeaderType
              $active={activeCategory == "men"}
              onClick={() => {
                setActiveCategory("men");
                setCurrentBestsellers(menBestsellers);
              }}
            >
              men
            </StyledOneBestsellersHeaderType>
            <StyledOneBestsellersHeaderType
              $active={activeCategory == "accessories"}
              onClick={() => {
                setActiveCategory("accessories");
                setCurrentBestsellers(accesoriesBestsellers);
              }}
            >
              accessories
            </StyledOneBestsellersHeaderType>
          </MediaQuery>

          {/* <StyledOneBestsellersHeaderTypeGold>
            show more
          </StyledOneBestsellersHeaderTypeGold> */}
        </StyledBestsellersHeaderRight>
      </StyledBestsellersHeader>

      <StyledProductsContainer>
        {loading ? (
          <Loader />
        ) : (
          currentBestsellers &&
          currentBestsellers.map((product: any) => {
            console.log(product);

            return (
              <OneBestsellerProduct
                name={product.name}
                type={findCommonElementByid(
                  product.categories,
                  underCategories
                )}
                price={parseFloat(product.price).toFixed(2)}
                image={product.images.length > 0 && product.images[0].src}
                id={product.id}
              />
            );
          })
        )}
      </StyledProductsContainer>
      <StyledMoreProductsButtonCotnainer>
        <ArrowButton onClick={pushToList}>SHOW MORE PRODUCTS</ArrowButton>
      </StyledMoreProductsButtonCotnainer>
    </StyledBestsellers>
  );
};
