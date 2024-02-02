import styled from "styled-components";

interface BlackButtonProps {
  margin?: any;
}

export const StyledBlackButton = styled.button<BlackButtonProps>`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-width: 0;
  outline: none;
  padding: 12px 18px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
  margin: ${(props) => props.margin};

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
