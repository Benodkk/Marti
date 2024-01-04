import {
  StyledCheckEmail,
  StyledConfirmation,
  StyledConfirmationContainer,
  StyledConfirmationHeart,
  StyledConfirmationLeft,
  StyledConfirmationMessage,
  StyledConfirmationRight,
} from "./Confirmation.styled";
import ConfirmationHeart from "@/assets/ConfirmationHeart.png";

interface ConfirmationProps {}

export const ConfirmationTemplate = ({}: ConfirmationProps) => {
  return (
    <StyledConfirmationContainer>
      <StyledConfirmation>
        <StyledConfirmationLeft>
          <StyledConfirmationMessage>Thank you,</StyledConfirmationMessage>
          <StyledConfirmationMessage>
            we confirm your order!
          </StyledConfirmationMessage>
          <StyledCheckEmail>Check your email</StyledCheckEmail>
        </StyledConfirmationLeft>
        <StyledConfirmationRight>
          <StyledConfirmationHeart src={ConfirmationHeart.src} />
        </StyledConfirmationRight>
      </StyledConfirmation>
    </StyledConfirmationContainer>
  );
};
