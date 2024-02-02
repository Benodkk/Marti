import styled from "styled-components";

interface Props {
  visible: boolean;
}

export const StyledErrorContainer = styled.div<Props>`
  z-index: 1111125;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 125px;
  width: 500px;
  padding: 10px;
  border-radius: 10px;
  background-color: #ff2828;
  transition: 0.5s;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  font-size: 16px;
`;

export const StyledErrorTitle = styled.div`
  font-weight: 600;
`;
