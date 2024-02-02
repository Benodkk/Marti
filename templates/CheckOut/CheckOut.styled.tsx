import styled from "styled-components";

export const StyledCheckOutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledCheckOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1020px;
  margin-top: 50px;
`;

// sign in

export const StyledSignInCheckOut = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyledCheckOutTitle = styled.h2`
  color: #1f2937;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px; /* 100% */
  margin: 30px 0;
  text-align: center;
`;

export const StyledBackToBag = styled.div`
  color: #4b5563;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px; /* 100% */

  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    text-decoration-line: underline;
  }
`;

export const StyledInput = styled.input`
  color: #4b5563;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px; /* 100% */
  width: 100%;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  outline: none;
  padding: 5px;
  margin-bottom: 15px;
`;

export const StyledSignInButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px; /* 100% */
  background: #1f2937;
  width: 100%;
  padding: 20px;
  margin-top: 40px;
`;

export const StyledOtherActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledOneAction = styled.div`
  color: #4b5563;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  cursor: pointer;
  &:hover {
    text-decoration-line: underline;
  }
`;

// order summary

export const StyledOrderSum = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 50px;
  margin-left: 50px;
  background: #f9fafb;
  justify-content: space-between;
`;

export const StyledOrderSumTitle = styled.div`
  color: #1f2937;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  margin-bottom: 20px;
`;

export const StyledRowsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledOrderRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StyledOrderRowLabel = styled.div`
  color: #4b5563;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 100% */
`;

export const StyledOrderRowValue = styled.div`
  color: #4b5563;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
`;

export const StyledSummaryTotalRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSummary = styled.div`
  color: #1f2937;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px; /* 100% */
`;

export const StyledOr = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: #4b5563;
  font-size: 16px;
  margin: 20px 0;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #4b5563;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;
export const StyledAsGuestButton = styled.button`
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px; /* 100% */
  background: #1f2937;
  width: 50%;
  padding: 20px;
`;
