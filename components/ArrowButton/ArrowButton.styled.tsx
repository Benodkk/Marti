import styled from "styled-components";

export const StyledButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid #00111a;
  border-radius: 1000px;
  padding: 10px 15px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s;
  color: #252525;
  &:hover {
    background-color: #252525;
    color: #f0f0f0;
  }
  @media (max-width: 1020px) {
    font-size: 12px;
    padding: 8px 12px;
    gap: 6px;
  }
`;

export const StyledButtonText = styled.div`
  /* color: #252525; */
`;

export const StyledArrows = styled.div`
  position: relative;
`;
