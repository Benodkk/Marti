import styled from "styled-components";
import ReactSlider from "react-slider";

export const StyledBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  margin-top: 50px;
  @media (max-width: 1020px) {
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
`;

// search row

export const StyledSearchRow = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: end;
`;

// body list

export const StyledBodyList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
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

// main style

export const ProductListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
