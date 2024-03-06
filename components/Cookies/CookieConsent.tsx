import React, { useState, useEffect } from "react";
import { StyledBlackButtonCookie, StyledCookies } from "./CookieConsent.styled";
import { BlackButton } from "../BlackButton/BlackButton";
import { translation } from "@/translation";
import { useSelector } from "react-redux";
import { selectLanguage } from "@/redux/languageSlice";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const language = useSelector(selectLanguage);
  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <StyledCookies>
      {translation[language].cookieMessage}
      <StyledBlackButtonCookie onClick={handleAccept}>
        {translation[language].accept}
      </StyledBlackButtonCookie>
    </StyledCookies>
  );
};

export default CookieConsent;
