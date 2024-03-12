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
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import { signIn } from "@/API/strapiConfig";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { setUser } from "@/redux/userSlice";
import Error from "@/components/Error/Error";

export default function CheckOutTemplate() {
  const [cookies, setCookie] = useCookies(["jwt", "email", "id"]); // Dodaj to na początku Twojej funkcji handleLogin
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Proszę wprowadzić nazwę użytkownika i hasło!");
    } else {
      const proces = await signIn(email, password);
      if (proces.user) {
        const newUserData = {
          email: proces.user.email,
          id: proces.user.id,
          confirmed: proces.user.confirmed,
        };

        setCookie("jwt", proces.jwt, { path: "/" }); // Tutaj zapisujesz token JWT do ciasteczka 'jwt'
        setCookie("email", proces.user.email, { path: "/" });
        setCookie("id", proces.user.id, { path: "/" });

        dispatch(setUser(newUserData));
        router.push("/Adress");
      } else {
        if (proces.response.data.error.message.includes("confirmed")) {
          setShowError(true);
          setErrorMessage(translation[language].confirmemail);
        } else if (proces.response.data.error.message.includes("password")) {
          setShowError(true);
          setErrorMessage(translation[language].incorecctEmail);
        }
      }
    }
  };

  return (
    <StyledCheckOutContainer>
      <StyledCheckOut>
        <StyledSignInCheckOut>
          <StyledBackToBag onClick={() => router.back()}>
            {"< " + translation[language].backToBag}
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
              label={translation[language].password}
            />

            <StyledBlackButton margin={"16px 0 4px"} type="submit">
              {translation[language].signIn}
            </StyledBlackButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>
              {translation[language].forgotPassword}
            </StyledOneAction>
            <StyledOneAction onClick={() => router.push("/SignUp")}>
              {translation[language].createAccount}
            </StyledOneAction>
          </StyledOtherActions>
          <StyledOr> {translation[language].or}</StyledOr>
          <StyledBlackButton onClick={() => router.push("/Adress")}>
            {translation[language].continueAsGuest}
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
      <Error showError={showError} setShowError={setShowError}>
        {errorMessage}
      </Error>
    </StyledCheckOutContainer>
  );
}
