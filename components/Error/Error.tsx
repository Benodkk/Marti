import { useClickOutside } from "@/hooks/clickOutside";
import { StyledErrorContainer } from "./Error.styled";
import { useRef } from "react";

interface Props {
  showError: boolean;
  setShowError?: any;
  children: any;
}

const Error = ({ showError, setShowError, children }: Props) => {
  const ref: any = useRef();

  useClickOutside(ref, () => showError && setShowError(false));
  if (!showError) return null;

  return (
    <StyledErrorContainer ref={ref} visible={showError}>
      {children}
    </StyledErrorContainer>
  );
};

export default Error;
