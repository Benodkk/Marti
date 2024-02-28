import styled from "styled-components";

export const StyledCookies = styled.div`
  position: fixed;
  bottom: 20px;
  width: 60%;
  right: 20%;
  background-color: #fff;
  z-index: 10000;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const StyledBlackButtonCookie = styled.button`
  appearance: none;
  background-color: #000000;
  border: 2px solid #1a1a1a;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-width: 0;
  outline: none;
  padding: 6px 12px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

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
