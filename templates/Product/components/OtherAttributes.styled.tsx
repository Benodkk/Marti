import styled from "styled-components";

export const StyledOtherAttributes = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: start;
  gap: 10px;
`;

export const StyledOtherAttributesDesc = styled.div`
  margin-top: 10px;
`;

interface OtherAttributesContainerProps {
  $display: string;
}

export const StyledOtherAttributesContainer = styled.div<OtherAttributesContainerProps>`
  gap: 10px;
  margin: 10px 0;
  display: ${(props) => props.$display};
  flex-direction: column;
`;

export const StyledOtherAttributesInfo = styled.div`
  color: #6b7280;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
`;

interface OneDetailsProps {
  $active?: boolean;
}
export const StyledOneOtherAttributesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledOneOtherAttributes = styled.div<OneDetailsProps>`
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

export const StyledOtherAttributesLabel = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

// heeels sizes

export const StyledSizesContainer = styled.div<OtherAttributesContainerProps>`
  gap: 10px;
  display: ${(props) => props.$display};
  flex-direction: column;
  margin: 10px 5px;
`;

export const StyledSizes = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  /* align-items: start; */
  gap: 10px;
`;

export const StyledOneSizeContainer = styled.div<OneDetailsProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 50px;
  width: 50px;
  cursor: pointer;
  border: ${(props) =>
    props.$active ? "4px solid #caa871" : "1px solid #d1d5db"};
  &:hover {
    border: ${(props) =>
      props.$active ? "4px solid #caa871" : "2px solid #caa871"};
  }
`;

export const StyledOneSize = styled.div`
  color: #1f2937;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
