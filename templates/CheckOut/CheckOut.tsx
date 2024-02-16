import { useState } from "react";
import {
  StyledAsGuestButton,
  StyledBackToBag,
  StyledCheckOut,
  StyledCheckOutContainer,
  StyledCheckOutTitle,
  StyledOneAction,
  StyledOr,
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
import {
  FormField,
  FormGroup,
  FormLabel,
  StyledInput,
} from "@/components/helpers/Helpers.styled";
import { Input } from "@/components/Input/Input";
import { useRouter } from "next/router";
import { StyledBlackButton } from "@/components/BlackButton/BlackButton.styled";

export default function CheckOutTemplate() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Proszę wprowadzić nazwę użytkownika i hasło!");
    } else {
      router.push("/Adress");
      // Tutaj możesz dodać logikę logowania
      console.log("Logging in with:", email, password);
      // Na przykład wysyłając dane do API serwera...
    }
  };

  return (
    <StyledCheckOutContainer>
      <StyledCheckOut>
        <StyledSignInCheckOut>
          <StyledBackToBag onClick={() => router.push("/Cart")}>
            {"< Back to my bag"}
          </StyledBackToBag>
          <StyledCheckOutTitle>Check out</StyledCheckOutTitle>

          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              label="E-mail"
            />
            <Input
              type="text"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              label="Password"
            />

            <StyledBlackButton margin={"16px 0 4px"} type="submit">
              Sign In
            </StyledBlackButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>Forgot Password?</StyledOneAction>
            <StyledOneAction onClick={() => router.push("/SignUp")}>
              Create account
            </StyledOneAction>
          </StyledOtherActions>
          <StyledOr>Or</StyledOr>
          <StyledBlackButton onClick={() => router.push("/Adress")}>
            Continue as guest
          </StyledBlackButton>
        </StyledSignInCheckOut>

        {/* <StyledOrderSum>
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
        </StyledOrderSum> */}
      </StyledCheckOut>
    </StyledCheckOutContainer>
  );
}
