import {
  StyledBigIcon,
  StyledCreateAccountButton,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledLeftRegister,
  StyledMBGC,
  StyledNameContainer,
  StyledOneName,
  StyledRegister,
  StyledRegisterContainer,
  StyledRegisterTitle,
  StyledRightRegister,
  StyledTerms,
  StyledTermsCheck,
  StyledTermsContainer,
} from "./Register.styled";

import BigCircle from "@/assets/GoldenCircle.png";
import M from "@/assets/M.png";
import { reactDevice } from "@/styles/deviceWith";
import MediaQuery from "react-responsive";

export const RegisterTemplate = () => {
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
            <StyledRegisterTitle>Get’s started</StyledRegisterTitle>
            <StyledNameContainer>
              <StyledOneName>
                <StyledLabel>First Name</StyledLabel>
                <StyledInput placeholder="Enter first name" />
              </StyledOneName>
              <StyledOneName>
                <StyledLabel>Last Name</StyledLabel>
                <StyledInput placeholder="Enter last name" />
              </StyledOneName>
            </StyledNameContainer>
            <StyledInputContainer>
              <StyledLabel>Email Adress</StyledLabel>
              <StyledInput placeholder="Enter e-mail" />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>Password</StyledLabel>
              <StyledInput placeholder="Enter passowrd" />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledLabel>Confirm Password</StyledLabel>
              <StyledInput placeholder="Enter passowrd" />
            </StyledInputContainer>
            <StyledTermsContainer>
              <StyledTermsCheck type="checkbox" />
              <StyledTerms>
                I agree to Terms of Service & Privacy Policy
              </StyledTerms>
            </StyledTermsContainer>
            <StyledCreateAccountButton type="submit">
              Create Account
            </StyledCreateAccountButton>
          </form>
        </StyledRightRegister>
      </StyledRegister>
    </StyledRegisterContainer>
  );
};
