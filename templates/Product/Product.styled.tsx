import styled from "styled-components";

export const StyledProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 50vh;
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
  width: 50%;
  @media (max-width: 1020px) {
    width: 100%;
    align-items: center;
  }
`;
export const StyledMainPhoto = styled.img`
  height: 400px;
  object-fit: contain;
  cursor: pointer;
  @media (max-width: 1020px) {
    width: 50%;
    height: auto;
  }
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
  }
`;

export const StyledDescription = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  cursor: pointer;
  &:hover {
    border: 1px solid #caa871;
  }
`;

// description

// styled info

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
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
  display: flex;
  gap: 10px;
`;
export const StyledTypeOne = styled.div`
  &::after {
    content: ",";
  }

  &:last-child::after {
    content: "";
  }
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
  /* cursor: pointer; */
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

export const StyledInTotalRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
`;

export const StyledInTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: #1d1d1f;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.36px;
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

// bikini details

interface BikiniDetailsContainerProps {
  $display: string;
}

export const StyledBikiniDetailsContainer = styled.div<BikiniDetailsContainerProps>`
  /* display: flex; */
  flex-direction: column;
  display: ${(props) => props.$display};
`;

export const StyledRobeDetailsContainer = styled.div<BikiniDetailsContainerProps>`
  /* display: flex; */
  flex-direction: column;
  display: ${(props) => props.$display};
  margin: 10px 0;
`;

export const StyledBikiniDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

// yes or no

export const StyledYesOrNoContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const StyledOneChoice = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  /* border: 1px solid #d1d5db; */
  width: 100px;
  height: 100px;
  object-fit: contain;
  overflow: hidden;
  margin-bottom: 5px;
  transition: 0.2s all;
  &:hover {
    transform: scale(1.1);
  }
`;

export const StyledOneChoiceColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface OneChoiceProps {
  $active?: boolean;
}

export const StyledOneChoiceContainer = styled.div<OneChoiceProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 110px;
  border: 1px solid #d1d5db;
  height: 110px;
  margin-bottom: 10px;
  cursor: pointer;
  border: ${(props) =>
    props.$active ? "4px solid #caa871" : "1px solid #d1d5db"};
  &:hover {
    border: ${(props) =>
      props.$active ? "4px solid #caa871" : "2px solid #caa871"};
  }
`;

export const StyledShowDetails = styled.div`
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

interface StyledShowDetailsArrowProps {
  open: boolean;
  height?: string;
}

export const StyledShowDetailsArrow = styled.img<StyledShowDetailsArrowProps>`
  /* transition: 0.5s; */
  transform: ${(props) => (props.open ? `rotateX(180deg)` : "")};
`;

interface TextareaProps {
  $display: string;
}

export const StyledTextarea = styled.textarea<TextareaProps>`
  display: ${(props) => props.$display};
  width: 100%;
  height: 150px;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none; // Opcja, aby użytkownik nie mógł zmieniać rozmiaru textarea
  font-size: 16px;
  margin: 10px 0;
  font-family: Roboto;

  &:focus {
    outline: none;
    border-color: #caa871;
    box-shadow: 0 0 2px #caa871;
  }
`;

export const StyledRobeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledRobeText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
  margin-top: 20px;
`;
