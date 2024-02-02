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
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: #969696 0px 1px 5px 0px;
  }
  @media (max-width: 1020px) {
    width: 38px;
    height: 38px;
  }
`;
interface CountProductsProps {
  $display: string;
}

export const StyledCountProducts = styled.div<CountProductsProps>`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  font-size: 12px;
  border-radius: 100px;
  font-weight: 600;
  font-family: Roboto;
  background-color: #caa871;
  display: ${(props) => props.$display};
  align-items: center;
  justify-content: center;
`;
