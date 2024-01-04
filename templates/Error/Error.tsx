import { useRouter } from "next/router";
import {
  StyledError,
  StyledErrorContainer,
  StyledErrorMessage,
  StyledErrorTitle,
  StyledGoBackButton,
  StyledOps,
} from "./Error.styled";

interface ErrorProps {}

export const ErrorTemplate = ({}: ErrorProps) => {
  const router = useRouter();
  return (
    <StyledErrorContainer>
      <StyledError>
        <StyledErrorTitle>404</StyledErrorTitle>
        <StyledOps>OOOPS!</StyledOps>
        <StyledErrorMessage>
          Maybe this page used to exist or you just spelled something wrong.
        </StyledErrorMessage>
        <StyledErrorMessage>
          Chances are you spelled something wrong, so can you double check the
          URL?
        </StyledErrorMessage>
        <StyledGoBackButton onClick={() => router.back()}>
          Go back
        </StyledGoBackButton>
      </StyledError>
    </StyledErrorContainer>
  );
};
