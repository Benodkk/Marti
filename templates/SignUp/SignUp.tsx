import { useState } from "react";
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

interface SignUpProps {}
export default function SignUp({}: SignUpProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatPassword] = useState("");

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
          <StyledBack onClick={() => router.back()}>{"< Back"}</StyledBack>
          <StyledCheckOutTitle>Sign up</StyledCheckOutTitle>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              label="Name"
            />
            <Input
              type="text"
              value={secondName}
              onChange={(e: any) => setSecondName(e.target.value)}
              label="Second name"
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
            <BlackButton margin={"30px 0"} type="submit">
              Sign Up
            </BlackButton>
          </form>
        </StyledSignInCheckOut>
      </StyledCheckOut>
    </StyledCheckOutContainer>
  );
}
