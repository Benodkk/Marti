import { useRouter } from "next/router";
import { StyledBackButton } from "./BackButton.styled";
import Back from "@/assets/Back.svg";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

interface BackButtonProps {}

export const BackButton = ({}: BackButtonProps) => {
  const language = useSelector(selectLanguage);

  const router = useRouter();
  return (
    <StyledBackButton onClick={() => router.back()}>
      {language == "pl" ? "Wróć" : "Back"}
    </StyledBackButton>
  );
};
