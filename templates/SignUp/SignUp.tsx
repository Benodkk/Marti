import { useEffect, useState } from "react";
import {
  StyledBack,
  StyledCheckOut,
  StyledCheckOutContainer,
  StyledCheckOutTitle,
  StyledInput,
  StyledOneAction,
  StyledOtherActions,
  StyledSignInButton,
  StyledSignInCheckOut,
} from "./SignUp.styled";
import { useRouter } from "next/router";
import { Input } from "@/components/Input/Input";
import { BlackButton } from "@/components/BlackButton/BlackButton";
import Error from "@/components/Error/Error";
import { useSelector } from "react-redux";
import { StyledErrorTitle } from "@/components/Error/Error.styled";
import { createProfile } from "@/API/profile";
import { signUp } from "@/API/strapiConfig";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";

interface SignUpProps {}
export default function SignUp({}: SignUpProps) {
  const language = useSelector(selectLanguage);
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const [showEmailError, setShowEmailError] = useState(false);
  const [emailErrors, setEmailErrors] = useState<any>("");

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    let newErrors = [];
    if (name.length == 0) {
      newErrors.push(translation[language].firstName);
    }
    if (secondName.length == 0) {
      newErrors.push(translation[language].lastName);
    }
    if (email.length == 0) {
      newErrors.push("E-mail");
    }

    if (password.length == 0) {
      newErrors.push(translation[language].password);
    }
    if (repeatpassword.length == 0) {
      newErrors.push(translation[language].repeatPassword);
    }
    if (password !== repeatpassword) {
      newErrors.push(translation[language].repeatpasswordError);
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.push(translation[language].validErrorEmail);
    }
    if (password.length != 0 && password.length < 6) {
      newErrors.push(translation[language].passwordLengthErrorL);
      if (newErrors.length > 0) {
      }
      setErrors(newErrors);
      setShowError(true);
    } else {
      const signUpAction = await signUp(email, password);
      console.log(signUpAction);
      if (signUpAction?.user) {
        router.push("/ConfirmationSend?emailConfirmationSend=true");
      } else {
        const message = "This email is already taken";
        const plMessage = "Ten e-mail jest już zajęty";
        setEmailErrors(language == "pl" ? plMessage : message);
        setShowEmailError(true);
      }
    }
  };

  return (
    <StyledCheckOutContainer>
      <StyledCheckOut>
        <StyledSignInCheckOut>
          <StyledBack
            onClick={() => router.back()}
          >{`< ${translation[language].back}`}</StyledBack>
          <StyledCheckOutTitle>
            {translation[language].signUp}
          </StyledCheckOutTitle>
          <form>
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              label={translation[language].firstName}
            />
            <Input
              type="text"
              value={secondName}
              onChange={(e: any) => setSecondName(e.target.value)}
              label={translation[language].lastName}
            />
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
            <Input
              type="text"
              value={repeatpassword}
              onChange={(e: any) => setRepeatPassword(e.target.value)}
              label={translation[language].repeatPassword}
            />
            <BlackButton
              margin={"30px 0"}
              type="submit"
              onClick={handleRegister}
            >
              {translation[language].signUp}
            </BlackButton>
          </form>
        </StyledSignInCheckOut>
      </StyledCheckOut>
      <Error showError={showError} setShowError={setShowError}>
        <StyledErrorTitle>
          {translation[language].completeFields}:
        </StyledErrorTitle>
        {errors?.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
      <Error showError={showEmailError} setShowError={setShowEmailError}>
        {emailErrors}
      </Error>
    </StyledCheckOutContainer>
  );
}
