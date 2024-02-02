import styled from "styled-components";
import ReactSlider from "react-slider";

export const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

// header

interface StyledProductListHeaderContainerProps {
  $backgroundColor: string;
}
export const StyledProductListHeaderContainer = styled.div<StyledProductListHeaderContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 250px;
  margin-top: 50px;
  background-color: ${(props) => props.$backgroundColor};
  @media (max-width: 1020px) {
    height: 150px;
  }
`;

export const StyledProductListHeader = styled.div`
  display: flex;
  align-items: center;
  width: 1020px;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const StyledListHeaderPhoto = styled.img`
  height: 280px;
  align-self: flex-end;
  margin-left: 100px;
  @media (max-width: 1020px) {
    height: 180px;
    margin-left: 60px;
  }
`;
export const StyledListHeaderTitleContainer = styled.h2`
  color: #2d2c3c;
  font-family: "Jost";
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  margin-left: 70px;
  @media (max-width: 1020px) {
    font-size: 24px;
    line-height: 27px;
    margin-left: 40px;
  }
`;

export const StyledListHeaderTitle = styled.div``;

// body

export const StyledBodyContainer = styled.div`
  display: flex;
  width: 1020px;
  margin-top: 50px;
  @media (max-width: 1020px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;

// body filters

export const StyledBodyFilters = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1020px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const StyledOneFiltersGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledOneFiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: -0.36px;
  /* border-bottom: 1px solid #d2d2d7; */
  padding: 8px;
`;

export const StyledOneFiltersGroupNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.36px;
  border-bottom: 1px solid #d2d2d7;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

interface StyledOneFiltersGroupNameArrowProps {
  open: boolean;
  height?: string;
}

export const StyledOneFiltersGroupNameArrow = styled.img<StyledOneFiltersGroupNameArrowProps>`
  /* transition: 0.5s; */
  transform: ${(props) => (props.open ? `rotateX(180deg)` : "")};
`;

export const StyledOneFiltersGroup = styled.div<StyledOneFiltersGroupNameArrowProps>`
  overflow: hidden;
  max-height: ${(props) => (props.open ? `` : "0px")}; // Przykładowa wartość
`;

// Filters filter

export const StyledFilterFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 8px;
  gap: 10px;
  position: relative;
`;

interface StyledOneFilterFilterContainerProps {
  checked: boolean;
}

export const StyledOneFilterFilterContainer = styled.div<StyledOneFilterFilterContainerProps>`
  color: ${(props) => (props.checked ? `#FFF` : "#1D1D1F")};
  background-color: ${(props) => (props.checked ? `#1D1D1F` : "#FFF")};
  border-radius: 1000px;
  border: 1px solid #1d1d1f;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  cursor: pointer;
  padding: 6px 10px;
`;

// Category filter

export const StyledCateogryFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 12px 0px; */
  gap: 5px;
  transition: 0.5s;
  box-sizing: content-box;
`;

export const StyledOneCateogryFilterChecked = styled.img``;

export const StyledOneCateogryFilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding: 6px 10px;
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

// Gender Filter

export const StyledGenderFilterContainer = styled.div``;

export const StyledOneGenderFilterContainer = styled.div``;

// Price filter

export const StyledPriceFilterContainer = styled.div``;

export const StyledOnePriceFilterContainer = styled.div``;
// Color filter

export const StyledColorrFilterContainer = styled.div``;

export const StyledOneColorrFilterContainer = styled.div``;

export const StyledFilterButton = styled.button`
  padding: 16px 20px;
  gap: 8px;
  width: 100%;
  background: #1f2937;
  color: white;
  margin-top: 20px;
  @media (max-width: 1020px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;

// body list

export const StyledBodyList = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0;
`;

export const StyledProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  @media (max-width: 1020px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StyledOneProductCart = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  font-family: "Jost";
  gap: 5px;
  margin-bottom: 40px;
  @media (max-width: 1020px) {
    width: 150px;
  }
`;

export const StyledFavourite = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const StyledOneProductPhotoContainer = styled.div`
  max-width: 200px;
  max-height: 300px;
  overflow: hidden;
  z-index: 1;

  @media (max-width: 1020px) {
    max-width: 120px;
    max-height: 180px;
  }
`;

export const StyledOneProductPhoto = styled.img`
  width: 200px;
  height: 300px;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  margin-bottom: 10px;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 1020px) {
    width: 150px;
    height: 225px;
  }
`;

export const StyledOneProductRedLabel = styled.div`
  color: #d0011b;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledOneProductName = styled.div`
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
  cursor: pointer;
`;

export const StyledOneProductShortDesc = styled.div`
  color: #1d1d1f;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledOneProductPrice = styled.div`
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

// sort

export const StyledInputSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  padding: 0 0 8px;
`;

export const StyledPriceInput = styled.input`
  width: 50%;
  color: #3f3f3f;
  font-family: Jost;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border-radius: 8px;
  border: 1px solid #d2d2d7;
  padding: 8px;
  gap: 10px;
  &:disabled {
    background-color: #fff;
  }
`;

export const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: white;
  border: 2px solid black;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

export const Thumb = (props: any, state: any) => (
  <StyledThumb {...props}></StyledThumb>
);

export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props: any) =>
    props.index === 2 ? "#ECECEE" : props.index === 1 ? "#1D1D1F" : "#ECECEE"};
  border-radius: 999px;
`;

export const Track = (props: any, state: any) => (
  <StyledTrack {...props} index={state.index} />
);
