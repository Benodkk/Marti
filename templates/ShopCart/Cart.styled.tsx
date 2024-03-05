import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledCart = styled.div`
  width: 1020px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledGoBack = styled.div`
  color: #4b5563;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledCartTitle = styled.h2`
  color: #111827;
  font-family: Roboto;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: flex-start;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
`;

export const StyledProductListContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const StyledProductList = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const StyledOneProduct = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledOneProductPhoto = styled.img`
  max-width: 150px;
  height: 240px;
  object-fit: contain;
  object-position: center;
  @media (max-width: 1020px) {
    width: 120px;
    height: 180px;
  }
`;

export const StyleOneProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px;
  justify-content: space-between;
`;

export const StyledTopDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProductName = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 100% */
  letter-spacing: -0.32px;
`;

export const StyledTopDetailsRight = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledPrice = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const StyledDelete = styled.div`
  color: #ef4444;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
  letter-spacing: -0.28px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledProductListDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledOneDetailCheck = styled.div`
  color: #4b5563;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  height: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledOneDetail = styled.div`
  color: #4b5563;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px; /* 100% */
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 20px;
`;

export const StyledOneDetailBold = styled.div`
  color: #4b5563;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const StyledOneDetailBoldLink = styled.div`
  color: #4b5563;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 12px; /* 100% */
  letter-spacing: -0.24px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledOneDetailContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledOneDetailFromList = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  padding-left: 5px;
`;

export const StyledEmpty = styled.div`
  color: #111827;
  font-family: Roboto;
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 100px 0;
`;

// checkbox

interface CheckboxLabelProps {
  $color?: any;
}

export const CheckboxLabel = styled.label<CheckboxLabelProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.$color};
`;
export const StyledCheckbox = styled.input`
  cursor: pointer;
`;

// summary

export const StyledProductSummary = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  justify-content: space-between;
  padding: 25px;
`;

export const StyledSumamryTitle = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: flex-start;
`;

export const StyledBottomSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSummaryButton = styled.button`
  padding: 8px 16px;
  gap: 8px;
  width: 100%;
  background: #1f2937;
  color: white;
  margin-top: 20px;
  font-size: 16px;
  @media (max-width: 1020px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;

export const StyledTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTotal = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: flex-start;
`;

export const StyledTotalPrice = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: flex-start;
`;

export const StyledPaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f9fafb;
  padding: 40px 25px;
  width: 100%;
  margin-top: 50px;
`;
