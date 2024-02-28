import styled from "styled-components";

export const MainPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledMainPageSectionTitle = styled.h3`
  color: #232323;
  font-family: "Jost";
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
`;

export const StyledMainPageSectionGold = styled.h3`
  color: #caa871;
  font-family: "Jost";
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

// welcome page

interface WelcomePageContainerProps {
  $bgImage: string;
}
export const WelcomePageContainer = styled.div<WelcomePageContainerProps>`
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  display: flex;
  background-color: #f1f1f1;
  position: relative;
  width: 100%;
  height: calc(100vh - 75px);
`;

// left side

export const WelcomePageLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  /* justify-content: center; */
  padding-top: 100px;
  align-items: end;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const WelcomePageLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 400px;
  @media (max-width: 1020px) {
    width: 100%;
    padding: 0 15px;
  }
`;

export const StyledUpTo = styled.div`
  background-color: #caa871;

  font-weight: 500;
  padding: 8px 12px;
  border-radius: 1000px;
  @media (max-width: 1020px) {
    font-size: 12px;
    padding: 6px 9px;
  }
`;

export const StyledTitleContainer = styled.h2`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

interface TitleProps {
  $color: string;
}

export const StyledTitle = styled.div<TitleProps>`
  font-size: 60px;
  line-height: 95%;
  font-family: "Jost";
  font-weight: 600;
  color: ${(props) => props.$color};
  display: flex;
  flex-direction: column;
  @media (max-width: 1020px) {
    font-size: 40px;
  }
`;

export const StyledWelcomePageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 5px;
`;

interface WelcomePageTextProps {
  $color: string;
}

export const StyledWelcomePageText = styled.div<WelcomePageTextProps>`
  color: ${(props) => props.$color};
  white-space: nowrap;
  @media (max-width: 1020px) {
    white-space: wrap;
  }
`;

export const StyledGoldenCircleImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  transform: translateX(-50%) translateY(50%);
  width: 15vw;
  @media (max-width: 1020px) {
    width: 30vw;
    transform: translateX(-50%) translateY(20%);
  }
`;

// right side

export const WelcomePageRight = styled.div`
  display: flex;
  width: 55%;
  overflow: hidden;
  position: relative;
  top: 20px;
  @media (max-width: 1020px) {
    display: none;
  }
`;
export const WelcomePageRightContent = styled.div`
  position: relative;
  width: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

// shop now

export const StyledShopNowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1020px) {
    flex-direction: column;
  }
`;

// one shop one

interface StyledOneShopNowProps {
  $backgroundColor: string;
}

export const StyledOneShopNow = styled.div<StyledOneShopNowProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  background-color: ${(props) => props.$backgroundColor};
  margin-top: 150px;
  padding: 0 30px;
  gap: 20px;
  @media (max-width: 1020px) {
    height: 150px;
    width: 80vw;
    margin-top: 80px;
    padding: 0 20px;
  }
`;

export const StyledOneShopPhoto = styled.img`
  max-height: 280px;
  max-width: 200px;
  align-self: flex-end;
  @media (max-width: 1020px) {
    max-height: 200px;
  }
`;

export const StyledOneShopRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  max-width: 135px;
`;

export const StyledOneShopRightContent = styled.div`
  color: #2d2c3c;
  word-spacing: 100vw;
  text-align: right;
  font-family: Jost;
  font-size: 20px;
  line-height: 125%;
`;

// Bestsellers

export const StyledBestsellers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 150px;
  min-width: 1020px;
  @media (max-width: 1020px) {
    margin-top: 50px;
  }
`;

export const StyledBestsellersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledBestsellersHeaderRight = styled.div`
  display: flex;
  gap: 10px;
`;

interface OneBestsellersHeaderTypeProps {
  $active: boolean;
}

export const StyledOneBestsellersHeaderType = styled.div<OneBestsellersHeaderTypeProps>`
  color: #282c2c;
  font-family: "Jost";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  text-decoration: ${(props) => (props.$active ? "underline" : "")};
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-shadow: 2px 2px 3px rgba(109, 109, 109, 0.5);
  }
  @media (max-width: 1020px) {
    font-size: 10px;
  }
`;

export const StyledOneBestsellersHeaderTypeGold = styled.div`
  color: #caa871;
  font-family: "Jost";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.3px;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: underline;
  padding-left: 20px;
`;

export const StyledProductsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 1020px) {
    max-width: 100vw;
    gap: 10px;
    overflow-x: scroll;
  }
`;

export const StyledOneProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  max-width: 240px;
`;

export const StyledOneProductPhotoContainer = styled.div`
  max-width: 240px;
  max-height: 340px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1020px) {
    max-width: 120px;
    max-height: 180px;
  }
`;

export const StyledOneProductPhoto = styled.img`
  width: 240px;
  height: 340px;
  object-fit: contain;
  object-position: center;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1020px) {
    width: 120px;
    height: 180px;
  }
`;

export const StyledProductType = styled.div`
  color: #caa871;
  font-family: "Jost";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10px;
  @media (max-width: 1020px) {
    margin-top: 7px;
    font-size: 10px;
  }
`;

export const StyledProductName = styled.div`
  color: #232323;
  font-family: "Jost";
  font-size: 23px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  margin-top: 5px;
  /* cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-shadow: 2px 2px 3px rgba(109, 109, 109, 0.5);
  } */
  @media (max-width: 1020px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const StyledProductPrize = styled.div`
  color: #3f3f3f;
  font-family: "Jost";
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
`;

export const StyledIconContainer = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #caa871;
  border-radius: 100px;
  margin-top: 5px;
`;

export const StyledMoreProductsButtonCotnainer = styled.div`
  display: flex;
  align-self: center;
  padding-top: 40px;
`;

export const StyledMoreNewsButtonCotnainer = styled.div`
  display: flex;
  align-self: center;
  padding-top: 20px;
`;
// New relese

export const StyledNewReleases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 150px;
  @media (max-width: 1020px) {
    max-width: 90vw;
    margin-top: 80px;
  }
`;

export const StyledNewReleasesIamge = styled.img`
  width: 1020px;
  margin-top: 40px;
  @media (max-width: 1020px) {
    width: 100%;
    margin-top: 20px;
  }
`;

// latest news

export const StyledLatestNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const StyledLatestNewsContaienr = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 70px;
  @media (max-width: 1020px) {
    margin-top: 40px;
    flex-direction: column;
    gap: 50px;
  }
`;

// one latest news

export const StyledOneLatestNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  border-bottom: 1px solid #e3e3e3;
  transition: all 0.3s;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom: 0px solid #e3e3e3;
  }
  @media (max-width: 1020px) {
    width: 250px;
  }
`;

export const StyledOneLatestDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  align-self: start;
  background-color: #caa871;
  padding: 8px 12px;
  border-radius: 10px;
  margin-left: 20px;
  transform: translateY(-50%);
  position: absolute;
  z-index: 2;
  @media (max-width: 1020px) {
    padding: 6px 9px;
    border-radius: 10px;
    margin-left: 20px;
  }
`;

export const StyledOneLatestDay = styled.div`
  color: #fff;
  font-family: "Jost";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const StyledOneNewsPhotoContainer = styled.div`
  max-width: 350px;
  max-height: 250px;
  overflow: hidden;
  z-index: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 1020px) {
    max-width: 250px;
    max-height: 180px;
  }
`;

export const StyledOneNewsPhoto = styled.img`
  width: 350px;
  height: 250px;
  transition: all 0.5s;
  object-fit: cover;
  object-position: center;
  background-color: #e2e2e2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border: none;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1020px) {
    width: 250px;
    height: 180px;
  }
`;

export const StyledOneNewsType = styled.div`
  color: #c28721;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-self: start;
  margin-bottom: 5px;
  @media (max-width: 1020px) {
    font-size: 10px;
  }
`;

export const StyledOneNewsTitle = styled.div`
  color: #0c0c0c;
  font-family: Jost;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  align-self: flex-start;
  line-height: 125%;
  letter-spacing: -0.56px;
  padding: 15px 20px;
  @media (max-width: 1020px) {
    font-size: 16px;
  }
`;
