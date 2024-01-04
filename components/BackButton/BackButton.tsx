import { useRouter } from "next/router";
import { StyledBackButton } from "./BackButton.styled";
import Back from "@/assets/Back.svg";

interface BackButtonProps {}

export const BackButton = ({}: BackButtonProps) => {
  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      <img src={Back.src} /> Back
    </StyledBackButton>
  );
};
