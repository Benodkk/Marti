import styled from "styled-components";

export const StyledConfirmationSendContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 60vh;
  align-items: center;
  justify-content: center;
`;

export const StyledConfirmationSend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f9fafb;
  width: 1024px;
  position: relative;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const StyledConfirmationText = styled.div`
  color: #111827;
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
export const StyledConfirmationTextsmall = styled.div`
  margin-top: 30px;
  color: #111827;
  color: #232323;
  font-family: "Jost";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 20px;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  right: 10%;
`;
