import { useState } from "react";
import {
  StyledBackToBag,
  StyledCheckOut,
  StyledCheckOutContainer,
  StyledCheckOutTitle,
  StyledInput,
  StyledOneAction,
  StyledOrderRow,
  StyledOrderRowLabel,
  StyledOrderRowValue,
  StyledOrderSum,
  StyledOrderSumTitle,
  StyledOtherActions,
  StyledRowsContainer,
  StyledSignInButton,
  StyledSignInCheckOut,
  StyledSummary,
  StyledSummaryTotalRow,
} from "./CheckOut.styled";

export const CheckOutTemplate = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Proszę wprowadzić nazwę użytkownika i hasło!");
    } else {
      // Tutaj możesz dodać logikę logowania
      console.log("Logging in with:", email, password);
      // Na przykład wysyłając dane do API serwera...
    }
  };

  return (
    <StyledCheckOutContainer>
      <StyledCheckOut>
        <StyledSignInCheckOut>
          <StyledCheckOutTitle>Check out</StyledCheckOutTitle>
          <StyledBackToBag>Back to my bag</StyledBackToBag>
          <form onSubmit={handleLogin}>
            <StyledInput
              type="text"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              placeholder="E-mail"
            />
            <StyledInput
              type="text"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              placeholder="Hasło"
            />
            <StyledSignInButton type="submit">Sign In</StyledSignInButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>Zapomniałeś hasło?</StyledOneAction>
            <StyledOneAction>Stwórz konto</StyledOneAction>
          </StyledOtherActions>
        </StyledSignInCheckOut>
        <StyledOrderSum>
          <StyledOrderSumTitle>Order Summary</StyledOrderSumTitle>
          <StyledRowsContainer>
            <StyledOrderRow>
              <StyledOrderRowLabel>Total items</StyledOrderRowLabel>
              <StyledOrderRowValue>20</StyledOrderRowValue>
            </StyledOrderRow>
            <StyledOrderRow>
              <StyledOrderRowLabel>Total Charges</StyledOrderRowLabel>
              <StyledOrderRowValue>12412,21 zł</StyledOrderRowValue>
            </StyledOrderRow>
            <StyledOrderRow>
              <StyledOrderRowLabel>Shipping charges</StyledOrderRowLabel>
              <StyledOrderRowValue>41,21 zł</StyledOrderRowValue>
            </StyledOrderRow>
            <StyledOrderRow>
              <StyledOrderRowLabel>Sub total</StyledOrderRowLabel>
              <StyledOrderRowValue>4412,21 zł</StyledOrderRowValue>
            </StyledOrderRow>
          </StyledRowsContainer>

          <StyledSummaryTotalRow>
            <StyledSummary>Estimated Total</StyledSummary>
            <StyledSummary>5696,55 zł</StyledSummary>
          </StyledSummaryTotalRow>
        </StyledOrderSum>
      </StyledCheckOut>
    </StyledCheckOutContainer>
  );
};
