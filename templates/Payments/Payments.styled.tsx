import styled from "styled-components";

export const StyledPaymentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledPayments = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  margin-top: 80px;
`;

export const StyledPaymentsTitle = styled.h2`
  color: #111827;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.72px;
  margin-top: 10px;
`;

export const StyledPaymentListContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
`;

export const StyledPaymentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 30px;
`;

// ona shop cart

export const StyledOneCart = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const StyledOneCartLeft = styled.div`
  display: flex;
`;

export const StyledOneProductPhoto = styled.img`
  width: 200px;
  height: 300px;
  object-fit: cover;
  object-position: center;
`;

export const StyledProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const StyledProductNumber = styled.div`
  color: #111827;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.24px;
`;
export const StyledProductName = styled.div`
  color: #111827;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.32px;
`;
export const StyledProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  gap: 5px;
`;

export const StyledProductDetail = styled.div`
  color: #4b5563;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.24px;
`;

export const StyledActionRow = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledAddToFavourite = styled.button`
  color: #111827;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.28px;
  &:hover {
    text-decoration-line: underline;
  }
`;
export const StyledRemove = styled.button`
  color: #ef4444;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.28px;
  &:hover {
    text-decoration-line: underline;
  }
`;

export const StyledOneCartRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
`;

export const StyledProductCount = styled.input`
  &[type="number"]::-webkit-inner-spin-button,
  &[type="number"]::-webkit-outer-spin-button {
    opacity: 1;
  }
  border: 1px solid #d1d5db;
  padding: 6px;
  outline: none;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledProductPrice = styled.div`
  color: #3f3f3f;
  font-family: Jost;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  padding: 20px;
  background-color: #f9fafb;
`;

export const StyledTopSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSummaryTitle = styled.div`
  color: #111827;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: -0.72px;
  margin-bottom: 30px;
`;

export const StyledSummaryOneRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const StyledSummaryLabel = styled.div`
  color: #111827;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.32px;
`;

export const StyledBotSummary = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledTotal = styled.div`
  color: #111827;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
  letter-spacing: -0.48px;
`;

export const StyledTotalPrize = styled.div`
  color: #111827;
  text-align: right;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: -0.48px;
`;

export const StyledCheckOutButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px; /* 100% */
  background: #1f2937;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
`;

// estimated shipment deliver

export const Styled = styled.h3``;
