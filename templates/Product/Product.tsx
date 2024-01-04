import { useState } from "react";
import {
  StyledAddToBagButton,
  StyledAddToWishlist,
  StyledColorsRow,
  StyledInfo,
  StyledLabel,
  StyledMainPhoto,
  StyledMoreInfo,
  StyledOneColor,
  StyledOneColorContainer,
  StyledOneSize,
  StyledOneStar,
  StyledOpinion,
  StyledOpinionRow,
  StyledPhotoRow,
  StyledPhotos,
  StyledPrize,
  StyledProduct,
  StyledProductContainer,
  StyledProductName,
  StyledSeeAllReviews,
  StyledSizeContainer,
  StyledSmallPhoto,
  StyledStars,
  StyledType,
} from "./Product.styled";
import BestsellersPhoto from "@/assets/BestSellersPhoto.png";
import WelcomeWoman from "@/assets/WelcomeWoman.png";
import StarFull from "@/assets/StarFull.svg";
import StarEmpty from "@/assets/StarEmpty.svg";

interface ProductProps {}

export const ProductTemplate = ({}: ProductProps) => {
  const [mainPhotoSrc, setMainPhotoSrc] = useState(BestsellersPhoto.src);

  return (
    <StyledProductContainer>
      <StyledProduct>
        <StyledPhotos>
          <StyledMainPhoto src={mainPhotoSrc} />
          <StyledPhotoRow>
            <StyledSmallPhoto
              onClick={() => setMainPhotoSrc(WelcomeWoman.src)}
              src={WelcomeWoman.src}
            />
            <StyledSmallPhoto
              onClick={() => setMainPhotoSrc(BestsellersPhoto.src)}
              src={BestsellersPhoto.src}
            />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
            <StyledSmallPhoto src={BestsellersPhoto.src} />
          </StyledPhotoRow>
        </StyledPhotos>
        <StyledInfo>
          <StyledType>women fitness</StyledType>
          <StyledProductName>Sweatshirt Regular Fit</StyledProductName>
          <StyledPrize>159,00 zł</StyledPrize>
          <StyledOpinionRow>
            <StyledOpinion>4.5/5</StyledOpinion>
            <StyledStars>
              <StyledOneStar src={StarFull.src} />
              <StyledOneStar src={StarFull.src} />
              <StyledOneStar src={StarFull.src} />
              <StyledOneStar src={StarFull.src} />
              <StyledOneStar src={StarEmpty.src} />
            </StyledStars>
            <StyledSeeAllReviews>See all 18 reviews</StyledSeeAllReviews>
          </StyledOpinionRow>
          <StyledLabel>Color</StyledLabel>
          <StyledColorsRow>
            <StyledOneColorContainer $active={true}>
              <StyledOneColor $bgColor="black" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="red" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="green" />
            </StyledOneColorContainer>
            <StyledOneColorContainer $active={false}>
              <StyledOneColor $bgColor="yellow" />
            </StyledOneColorContainer>
          </StyledColorsRow>
          <StyledLabel>Size</StyledLabel>
          <StyledSizeContainer>
            <StyledOneSize $active={true}>Small</StyledOneSize>
            <StyledOneSize $active={false}>Medium</StyledOneSize>
            <StyledOneSize $active={false}>Large</StyledOneSize>
          </StyledSizeContainer>
          <StyledMoreInfo>Find the perfect size?</StyledMoreInfo>
          <StyledLabel>Personalization</StyledLabel>
          <StyledSizeContainer>
            <StyledOneSize $active={true}>Chain (+ 20zł)</StyledOneSize>
            <StyledOneSize $active={false}>Clasp</StyledOneSize>
          </StyledSizeContainer>
          <StyledMoreInfo>More about personalization</StyledMoreInfo>
          <StyledAddToBagButton>Add to Bag</StyledAddToBagButton>
          <StyledAddToWishlist>Add to Wishlist</StyledAddToWishlist>
        </StyledInfo>
      </StyledProduct>
    </StyledProductContainer>
  );
};
