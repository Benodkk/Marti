import styled from "styled-components";

export const StyledRegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const StyledRegister = styled.div`
  width: 1020px;
  display: flex;
  margin-top: 100px;
  @media (max-width: 1020px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StyledLeftRegister = styled.div`
  width: 40%;
  display: flex;
  align-items: end;
`;

export const StyledBigIcon = styled.img`
  z-index: 2;
`;

export const StyledMBGC = styled.img`
  position: absolute;
  left: 0%;
  margin-bottom: 80px;
`;

export const StyledRightRegister = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  @media (max-width: 1020px) {
    width: 80%;
  }
`;

export const StyledRegisterTitle = styled.h2`
  color: #1f2937;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 50px;
  @media (max-width: 1020px) {
    margin-bottom: 24px;
  }
`;

export const StyledNameContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 24px;
`;

export const StyledOneName = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 5px;
`;

export const StyledLabel = styled.label`
  color: #4b5563;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 24px;
`;

export const StyledTermsContainer = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 15px;
`;

export const StyledTermsCheck = styled.input`
  cursor: pointer;
`;

export const StyledTerms = styled.div`
  @media (max-width: 1020px) {
    font-size: 11px;
  }
`;

export const StyledCreateAccountButton = styled.button`
  padding: 16px 20px;
  gap: 8px;
  width: 100%;
  border-radius: 6px;
  background: #1f2937;
  color: white;
  @media (max-width: 1020px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;
