import styled from "styled-components";

export const StyledProductionTime = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  gap: 10px;
`;

interface ProdcutionTimeContainerProps {
  $display: string;
}

export const StyledProdcutionTimeContainer = styled.div<ProdcutionTimeContainerProps>`
  gap: 10px;
  margin: 10px 0;
  display: ${(props) => props.$display};
  flex-direction: column;
`;

export const StyledProductiontimeInfo = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
`;

interface OneDetailsProps {
  $active?: boolean;
}
export const StyledOneProdcutionTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledOneProdcutionTime = styled.div<OneDetailsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 110px;
  width: 110px;
  overflow: hidden;
  margin-bottom: 5px;
  cursor: pointer;
  border: ${(props) =>
    props.$active ? "4px solid #caa871" : "1px solid #d1d5db"};
  &:hover {
    border: ${(props) =>
      props.$active ? "4px solid #caa871" : "2px solid #caa871"};
  }
`;

export const StyledProdcutionTimeLabel = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
