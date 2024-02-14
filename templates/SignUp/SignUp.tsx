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
import { StyledErrorTitle } from "@/components/Error/Error.styled";
import { createProfile } from "@/API/profile";
import { signUp } from "@/API/strapiConfig";

interface SignUpProps {}
export default function SignUp({}: SignUpProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState<any>([]);

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    let newErrors = [];
    if (name.length == 0) {
      newErrors.push("First Name");
    }
    if (secondName.length == 0) {
      newErrors.push("Last Name");
    }
    if (email.length == 0) {
      newErrors.push("E-mail");
    }
    if (password.length == 0) {
      newErrors.push("Password");
    }
    if (repeatpassword.length == 0) {
      newErrors.push("Repeat Password");
    }
    if (password !== repeatpassword) {
      newErrors.push(
        `Password field and reapeat password field has to be the same.`
      );
    }
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setShowError(true);
    } else {
      console.log(email, name, secondName, password);

      await signUp(email, password);
    }
  };

  return (
    <StyledCheckOutContainer>
      <StyledCheckOut>
        <StyledSignInCheckOut>
          <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
          <StyledCheckOutTitle>Sign up</StyledCheckOutTitle>
          <form>
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              label="First name"
            />
            <Input
              type="text"
              value={secondName}
              onChange={(e: any) => setSecondName(e.target.value)}
              label="Last name"
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
              label="Password"
            />
            <Input
              type="text"
              value={repeatpassword}
              onChange={(e: any) => setRepeatPassword(e.target.value)}
              label="Repeat password"
            />
            <BlackButton
              margin={"30px 0"}
              type="submit"
              onClick={handleRegister}
            >
              Sign Up
            </BlackButton>
          </form>
        </StyledSignInCheckOut>
      </StyledCheckOut>
      <Error showError={showError} setShowError={setShowError}>
        <StyledErrorTitle>
          Please complete the following fields:
        </StyledErrorTitle>
        {errors?.map((error: any) => {
          return <div>{error}</div>;
        })}
      </Error>
    </StyledCheckOutContainer>
  );
}
