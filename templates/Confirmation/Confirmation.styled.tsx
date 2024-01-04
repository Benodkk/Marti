import styled from "styled-components";

export const StyledConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledConfirmation = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f9fafb;
  width: 1020px;
  padding: 30px 90px;
  margin-top: 100px;
`;

export const StyledConfirmationLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledConfirmationMessage = styled.div`
  color: #111827;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 100% */
  letter-spacing: -0.72px;
`;

export const StyledCheckEmail = styled.div`
  color: #111827;
  font-size: 21px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: -0.42px;
  margin-top: 10px;
`;

export const StyledConfirmationRight = styled.div`
  position: relative;
`;

export const StyledConfirmationHeart = styled.img`
  position: absolute;
  right: 0;
  transform: translateY(-20%);
`;
