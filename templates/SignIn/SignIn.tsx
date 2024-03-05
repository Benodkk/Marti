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
} from "./SignIn.styled";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import { useRouter } from "next/router";
import { fetchColors, signIn } from "@/API/strapiConfig";
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
  const { email, id, confirmed } = useSelector(selectUserData);
  const dispatch = useDispatch();
  const router = useRouter();

  const [typeEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!typeEmail || !password) {
      alert("Proszę wprowadzić nazwę użytkownika i hasło!");
    } else {
      const proces = await signIn(typeEmail, password);
      console.log(proces);
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
        router.push("/Profile");
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
    <StyledSignInContainer>
      <StyledSignIn>
        <StyledSignInSignIn>
          <StyledSignInTitle>{translation[language].signIn}</StyledSignInTitle>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={typeEmail}
              onChange={(e: any) => setEmail(e.target.value)}
              label="E-mail"
            />
            <Input
              type="text"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              label={translation[language].password}
            />
            <BlackButton margin={"30px 0 0"} type="submit">
              {translation[language].signIn}
            </BlackButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>
              {translation[language].forgotPassword}
            </StyledOneAction>
            <StyledOneAction onClick={() => router.push("/SignUp")}>
              {translation[language].createAccount}
            </StyledOneAction>
          </StyledOtherActions>
        </StyledSignInSignIn>
      </StyledSignIn>
      <Error showError={showError} setShowError={setShowError}>
        {errorMessage}
      </Error>
    </StyledSignInContainer>
  );
}
