import React, { useState, useEffect } from "react";
import { StyledBlackButtonCookie, StyledCookies } from "./CookieConsent.styled";
import { BlackButton } from "../BlackButton/BlackButton";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      Ta strona używa plików cookies.
      <StyledBlackButtonCookie onClick={handleAccept}>
        Akceptuję
      </StyledBlackButtonCookie>
    </StyledCookies>
  );
};

export default CookieConsent;
