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

interface SignInProps {}
export default function SignIn({}: SignInProps) {
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
    <StyledSignInContainer>
      <StyledSignIn>
        <StyledSignInSignIn>
          <StyledSignInTitle>Sign in</StyledSignInTitle>
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
              placeholder="Password"
            />
            <StyledSignInButton type="submit">Sign In</StyledSignInButton>
          </form>
          <StyledOtherActions>
            <StyledOneAction>Forgot Password?</StyledOneAction>
            <StyledOneAction>Create account</StyledOneAction>
          </StyledOtherActions>
        </StyledSignInSignIn>
      </StyledSignIn>
    </StyledSignInContainer>
  );
}
