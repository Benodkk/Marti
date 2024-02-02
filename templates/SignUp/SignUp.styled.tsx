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
  margin: 50px 0;
`;

export const StyledBack = styled.div`
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
  text-decoration-line: underline;
  cursor: pointer;
  margin-bottom: 60px;
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
