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

interface BestsellersProps {}

export const Bestsellers = ({}: BestsellersProps) => {
  return (
    <StyledBestsellers>
      <StyledSmallGoldText>NEW COLLECTION 2024</StyledSmallGoldText>
      <StyledBestsellersHeader>
        <StyledMainPageSectionTitle>Bestsellers</StyledMainPageSectionTitle>
        <StyledBestsellersHeaderRight>
          <MediaQuery minWidth={reactDevice.desktop.minWidth}>
            <StyledOneBestsellersHeaderType>ALL</StyledOneBestsellersHeaderType>
            <StyledOneBestsellersHeaderType>
              women
            </StyledOneBestsellersHeaderType>
            <StyledOneBestsellersHeaderType>men</StyledOneBestsellersHeaderType>
            <StyledOneBestsellersHeaderType>
              accessories
            </StyledOneBestsellersHeaderType>
          </MediaQuery>

          <StyledOneBestsellersHeaderTypeGold>
            show more
          </StyledOneBestsellersHeaderTypeGold>
        </StyledBestsellersHeaderRight>
      </StyledBestsellersHeader>

      <StyledProductsContainer>
        <OneBestsellerProduct />
        <OneBestsellerProduct />
        <OneBestsellerProduct />
        <OneBestsellerProduct />
      </StyledProductsContainer>
      <StyledMoreProductsButtonCotnainer>
        <ArrowButton>SHOW MORE PRODUCTS</ArrowButton>
      </StyledMoreProductsButtonCotnainer>
    </StyledBestsellers>
  );
};
