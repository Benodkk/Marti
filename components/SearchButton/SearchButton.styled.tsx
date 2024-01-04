import styled from "styled-components";

export const StyledSearchButton = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
`;

export const StyledSearchLabel = styled.span`
  color: ${(props) => props.theme.colors.font.lightGrey};
  font-family: "Inter", sans-serif;
  padding-right: 10px;
`;
