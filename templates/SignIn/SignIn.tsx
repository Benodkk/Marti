import { useState } from "react";
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
import { signIn } from "@/API/strapiConfig";

interface SignInProps {}
export default function SignIn({}: SignInProps) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Proszę wprowadzić nazwę użytkownika i hasło!");
    } else {
      // Tutaj możesz dodać logikę logowania
      await signIn(email, password);
      console.log("Logging in with:", email, password);
    }
  };

  return (
    <StyledSignInContainer>
      <StyledSignIn>
        <StyledSignInSignIn>
          <StyledSignInTitle>Sign in</StyledSignInTitle>
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
            <BlackButton margin={"30px 0 0"} type="submit">
              Sign In
            </BlackButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>Forgot Password?</StyledOneAction>
            <StyledOneAction onClick={() => router.push("/SignUp")}>
              Create account
            </StyledOneAction>
          </StyledOtherActions>
        </StyledSignInSignIn>
      </StyledSignIn>
    </StyledSignInContainer>
  );
}
