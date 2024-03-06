import { useEffect, useState } from "react";
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
import {
  fetchColors,
  resetPassword,
  resetPasswordSend,
  signIn,
} from "@/API/strapiConfig";
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
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [code, setCode] = useState<any>("");

  useEffect(() => {
    if (router.query.code) {
      setCode(router.query.code);
    }
  }, [router.query]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    let newErrors: any = [];
    if (password !== repeatpassword) {
      newErrors.push(translation[language].repeatpasswordError);
    }
    if (password.length != 0 && password.length < 6) {
      newErrors.push(translation[language].passwordLengthErrorL);
    }
    if (newErrors.length > 0) {
      setErrorMessage(newErrors);
      setShowError(true);
    } else {
      const response = await resetPassword(code, password, repeatpassword);
      if (response.user) {
        router.push("/SignIn");
      }
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
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              label={translation[language].password}
            />
            <Input
              type="password"
              value={repeatpassword}
              onChange={(e: any) => setRepeatPassword(e.target.value)}
              label={translation[language].repeatPassword}
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
