import {
  StyledBigIcon,
  StyledCreateAccountButton,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledLeftRegister,
  StyledMBGC,
  StyledRegister,
  StyledRegisterContainer,
  StyledRegisterTitle,
  StyledRightRegister,
} from "./Login.styled";

import BigCircle from "@/assets/GoldenCircle.png";
import M from "@/assets/M.png";
import { reactDevice } from "@/styles/deviceWith";
import MediaQuery from "react-responsive";

export const LoginTemplate = () => {
  return (
    <StyledRegisterContainer>
      <StyledRegister>
        <MediaQuery minWidth={reactDevice.desktop.minWidth}>
          <StyledLeftRegister>
            <StyledMBGC src={M.src} />
            <StyledBigIcon src={BigCircle.src} />
          </StyledLeftRegister>
        </MediaQuery>

        <StyledRightRegister>
          <form>
            <StyledRegisterTitle>Sign in</StyledRegisterTitle>
            <StyledInputContainer>
              <StyledLabel>Email Adress</StyledLabel>
              <StyledInput placeholder="Enter e-mail" />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>Password</StyledLabel>
              <StyledInput placeholder="Enter passowrd" />
            </StyledInputContainer>
            <StyledCreateAccountButton type="submit">
              Sign in
            </StyledCreateAccountButton>
          </form>
        </StyledRightRegister>
      </StyledRegister>
    </StyledRegisterContainer>
  );
};
