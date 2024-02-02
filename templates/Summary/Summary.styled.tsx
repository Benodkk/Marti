import styled from "styled-components";

export const StyledSummaryContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1020px;
  margin: 80px 0;
`;

export const StyledBack = styled.div`
  color: #4b5563;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px; /* 100% */
  align-self: flex-start;

  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    text-decoration-line: underline;
  }
`;

export const StyledSummaryTitle = styled.h2`
  color: #1f2937;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px; /* 100% */
  margin: 30px 0;
  text-align: center;
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

export const StyledSummaryTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const StyledSumamryTitle = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: flex-start;
  margin-bottom: 15px;
`;

export const StyledAdresData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const StyledOneAdressData = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-self: flex-start;
  margin-bottom: 6px;
`;

export const StyledBottomSummary = styled.div`
  display: flex;
  flex-direction: column;
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

export const StyledCouponContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledCouponInput = styled.input`
  color: #000000;
  font-size: 16px;
  line-height: 16px; /* 100% */
  width: 100%;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  outline: none;
  padding: 5px;
  &:focus {
    border-bottom: 1px solid #caa871;
  }
`;
