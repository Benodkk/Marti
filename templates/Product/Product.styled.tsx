import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledProduct = styled.div`
  display: flex;
  width: 1020px;
  margin-top: 50px;
  @media (max-width: 1020px) {
    width: 100%;
    flex-direction: column;
    margin-top: 0px;
  }
`;

// styled photos

export const StyledPhotos = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (max-width: 1020px) {
    width: 100%;
    align-items: center;
  }
`;
export const StyledMainPhoto = styled.img`
  height: 400px;
  object-fit: contain;
  @media (max-width: 1020px) {
    width: 50%;
    height: auto;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledPhotoRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
  @media (max-width: 1020px) {
    padding: 0 10px;
    justify-content: center;
  }
`;

export const StyledSmallPhoto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  object-position: center;
  border: 1px solid #00000020;
  border-radius: 4px;
`;

// styled info

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1020px) {
    width: 100%;
    padding: 20px;
  }
`;

export const StyledType = styled.div`
  color: #caa871;
  font-family: Jost;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 2.4px;
  text-transform: uppercase;
`;

export const StyledProductName = styled.div`
  color: #232323;
  font-family: Jost;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 112% */
`;
export const StyledPrize = styled.div`
  color: #3f3f3f;
  font-family: Jost;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 20px 0;
  @media (max-width: 1020px) {
    padding: 15px 0;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const StyledOpinionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0 0 20px;
  @media (max-width: 1020px) {
    padding: 0 0 5px;
  }
`;

export const StyledOpinion = styled.div`
  color: #4b5563;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
`;

export const StyledStars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
`;

export const StyledOneStar = styled.img``;

export const StyledSeeAllReviews = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const StyledLabel = styled.div`
  color: #4b5563;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 20px 0 5px;
  @media (max-width: 1020px) {
    margin: 10px 0 5px;
  }
`;

export const StyledColorsRow = styled.div`
  display: flex;
  gap: 10px;
`;

interface OneColorContainerProps {
  $active: boolean;
}

export const StyledOneColorContainer = styled.div<OneColorContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border: ${(props) =>
    props.$active ? "1px solid #4B5563" : "1px solid transparent"};
`;

interface OneColorProps {
  $bgColor: string;
}

export const StyledOneColor = styled.div<OneColorProps>`
  width: 30px;
  height: 30px;
  padding: 15px;
  background-color: ${(props) => props.$bgColor};
`;

export const StyledSizeContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

interface OneSizeProps {
  $active: boolean;
}

export const StyledOneSize = styled.button<OneSizeProps>`
  color: #1f2937;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 12px;
  border: ${(props) =>
    props.$active ? "1px solid #1f2937" : "1px solid #D1D5DB"};
  width: 47%;
`;

export const StyledMoreInfo = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  text-decoration-line: underline;
  cursor: pointer;
  margin-top: 10px;
`;

export const StyledAddToBagButton = styled.button`
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

export const StyledAddToWishlist = styled.button`
  padding: 16px 20px;
  gap: 8px;
  width: 100%;
  background: transparent;
  color: #1f2937;
  border: 1px solid #1f2937;
  margin-top: 20px;
  @media (max-width: 1020px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;
