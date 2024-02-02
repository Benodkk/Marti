import styled from "styled-components";

interface BikiniCaseContainerProps {
  $display: string;
}

export const StyledBikiniCaseContainer = styled.div<BikiniCaseContainerProps>`
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  gap: 10px;
  margin: 10px 0;
  display: ${(props) => props.$display};
`;
