import styled from "styled-components";

export const StyledIconButton = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.main.grey};
  border-radius: 100px;
  @media (max-width: 1020px) {
    width: 38px;
    height: 38px;
  }
`;
