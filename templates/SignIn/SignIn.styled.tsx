import styled from "styled-components";

export const StyledSignInContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const StyledSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1020px;
  margin: 80px 0;
`;

// sign in

export const StyledSignInSignIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyledSignInTitle = styled.h2`
  color: #1f2937;
  font-size: 36px;
  font-weight: 600;
  line-height: 36px; /* 100% */
  margin-bottom: 60px;
  text-align: center;
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
