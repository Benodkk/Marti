import styled from "styled-components";
interface FormProps {
  $display: string;
}

export const StyledForm = styled.form<FormProps>`
  flex-wrap: wrap;
  display: ${(props) => props.$display};
  gap: 10%;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  width: 45%;
  margin: 5px 0;
`;

export const StyledPhotoInputContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: 5px 0;
`;

export const StyledLabel = styled.label`
  color: #4b5563;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding-left: 10px;
`;

export const StyledInput = styled.input`
  border: 1px solid #d1d5db;
  border-radius: 4px;
  color: #4b5563;
  font-weight: 600;
  width: 100%;
  padding: 10px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSubmitButton = styled.button``;
