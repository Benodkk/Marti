import styled from "styled-components";

interface Props {
  visible: boolean;
}

export const StyledSuccessContainer = styled.div<Props>`
  z-index: 1111125;
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #7dd871;
  transition: 0.5s;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  font-size: 16px;
`;

export const StyledSuccessTitle = styled.div`
  font-weight: 600;
`;
