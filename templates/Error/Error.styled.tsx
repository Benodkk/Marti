import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
`;

export const StyledErrorTitle = styled.div`
  font-size: 120px;
`;

export const StyledOps = styled.div`
  color: #1f2937;
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: 36px; /* 100% */
  margin-bottom: 30px;
`;

export const StyledErrorMessage = styled.div`
  color: #4b5563;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

export const StyledGoBackButton = styled.button`
  margin-top: 30px;
  padding: 16px 48px;
  gap: 10px;
  border-radius: 6px;
  background: #1f2937;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 100% */
`;
