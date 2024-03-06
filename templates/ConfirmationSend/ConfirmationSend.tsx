import { useEffect, useState } from "react";
import {
  StyledConfirmationSend,
  StyledConfirmationSendContainer,
  StyledConfirmationText,
  StyledConfirmationTextsmall,
  StyledImage,
  TextContainer,
} from "./ConfirmationSend.styled";
import photo from "@/assets/ThankYou.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";
import { translation } from "@/translation";
import { confirmEmail } from "@/API/strapiConfig";

interface ConfirmationSendProps {}

export default function ConfirmationSendTemplate({}: ConfirmationSendProps) {
  const language = useSelector(selectLanguage);
  const router = useRouter();

  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [smallLine, setSmallLine] = useState("");

  useEffect(() => {
    if (router.query) {
      if (router.query.emailConfirmationSend == "true") {
        setFirstLine(translation[language].firstLine);
        setSecondLine(translation[language].secondLineEmailConfirmationSend);
        setSmallLine(translation[language].smallLineEmailConfirmationSend);
      } else if (router.query.emailConfirmation == "true") {
        setFirstLine(translation[language].firstLine);
        setSecondLine(translation[language].secondLineEmailConfirmation);
        setSmallLine("");
        confirmEmailNow();
      } else if (router.query.orderConfirmation == "true") {
        setFirstLine(translation[language].firstLine);
        setSecondLine(translation[language].secondLineOrderConfirmation);
        setSmallLine(translation[language].smallLineOrderConfirmation);
      } else if (router.query.resetPassword == "true") {
        setFirstLine(translation[language].resetPassword);
        setSecondLine(translation[language].resetPasswordSecond);
      }
    }
  }, [router, language]);

  const confirmEmailNow = async () => {
    let confirmation = router.query.confirmation;
    const be = await confirmEmail(confirmation);
  };

  return (
    <StyledConfirmationSendContainer>
      <StyledConfirmationSend>
        <TextContainer>
          <StyledConfirmationText>{firstLine}</StyledConfirmationText>
          <StyledConfirmationText>{secondLine}</StyledConfirmationText>
          <StyledConfirmationTextsmall>{smallLine}</StyledConfirmationTextsmall>
        </TextContainer>
        <StyledImage src={photo.src} />
      </StyledConfirmationSend>
    </StyledConfirmationSendContainer>
  );
}
