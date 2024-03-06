import { useState } from "react";
import { useCookies } from "react-cookie";

import {
  StyledSignIn,
  StyledSignInContainer,
  StyledSignInTitle,
  StyledInput,
  StyledOneAction,
  StyledOtherActions,
  StyledSignInButton,
  StyledSignInSignIn,
} from "@/templates/SignIn/SignIn.styled";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { useRouter } from "next/router";
import { fetchColors, resetPasswordSend, signIn } from "@/API/strapiConfig";
import { useSelector } from "react-redux";
import { selectUserData, setUser } from "@/redux/userSlice";
import { useDispatch } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import Error from "@/components/Error/Error";

interface SignInProps {}
export default function SignIn({}: SignInProps) {
  const [cookies, setCookie] = useCookies(["jwt", "email", "id"]); // Dodaj to na początku Twojej funkcji handleLogin

  const language = useSelector(selectLanguage);
  const router = useRouter();

  const [typeEmail, setEmail] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    const response: any = await resetPasswordSend(typeEmail);

    if (
      response.response?.data?.error?.message?.includes("email must") ||
      response.response?.data?.error?.message?.includes("email is")
    ) {
      setShowError(true);
      setErrorMessage(translation[language].validErrorEmail);
    } else if (response.ok) {
      router.push("/ConfirmationSend?resetPassword=true");
    }
  };

  return (
    <StyledSignInContainer>
      <StyledSignIn>
        <StyledSignInSignIn>
          <StyledSignInTitle>
            {translation[language].resetPasswordTitle}
          </StyledSignInTitle>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={typeEmail}
              onChange={(e: any) => setEmail(e.target.value)}
              label="E-mail"
            />
            <BlackButton margin={"30px 0 0"} type="submit">
              Reset
            </BlackButton>
          </form>
        </StyledSignInSignIn>
      </StyledSignIn>
      <Error showError={showError} setShowError={setShowError}>
        {errorMessage}
      </Error>
    </StyledSignInContainer>
  );
}
