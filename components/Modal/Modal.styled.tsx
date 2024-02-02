import styled from "styled-components";

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
  max-width: 500px;
  z-index: 1001;
`;

export const StyledModalTitle = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: -0.32px;
  margin-bottom: 15px;
`;

export const StyledModalText = styled.div`
  color: #111827;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`;
