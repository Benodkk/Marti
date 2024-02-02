import styled from "styled-components";

export const StyledIconButton = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  border-radius: 100px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: #969696 0px 1px 5px 0px;
  }
  @media (max-width: 1020px) {
    width: 38px;
    height: 38px;
  }
`;
