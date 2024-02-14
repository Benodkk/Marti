import {
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from "./BikiniDetails.styled";

interface OneInputProps {}

export const OneInput = ({}: OneInputProps) => {
  return (
    <StyledInputContainer>
      <StyledLabel>Height</StyledLabel>
      <StyledInput placeholder="..." />
    </StyledInputContainer>
  );
};
