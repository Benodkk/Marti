import { useClickOutside } from "@/hooks/clickOutside";
import { StyledSuccessContainer } from "./Success.styled";
import { useRef } from "react";

interface Props {
  showSuccess: boolean;
  setShowSuccess?: any;
  children: any;
}

const Success = ({ showSuccess, setShowSuccess, children }: Props) => {
  const ref: any = useRef();

  useClickOutside(ref, () => showSuccess && setShowSuccess(false));
  if (!showSuccess) return null;

  return (
    <StyledSuccessContainer ref={ref} visible={showSuccess}>
      {children}
    </StyledSuccessContainer>
  );
};

export default Success;
