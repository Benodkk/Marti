// import { Header } from "@/components/Header/Header";
import { GlobalStyle } from "@/styles/Global";
import { StyledApp, StyledAppContainer } from "@/styles/app.styled";
import StyledComponentsRegistry from "@/styles/registry";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import CookieConsent from "@/components/Cookies/CookieConsent";
import { useEffect } from "react";
import { setLanguage } from "@/redux/languageSlice";
import { setCurrency } from "@/redux/currencySlice";

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const dispatch = store.dispatch;
    // Sprawdź, czy język został już ustawiony
    const storageLanguage = localStorage.getItem("userLanguage");
    if (
      storageLanguage &&
      (storageLanguage == "en" || storageLanguage == "pl")
    ) {
      dispatch(setLanguage(storageLanguage));
    } else {
      const defaultLanguage = navigator.language;
      if (defaultLanguage.includes("pl")) {
        localStorage.setItem("userLanguage", "pl");
        dispatch(setLanguage("pl"));
      } else {
        localStorage.setItem("userLanguage", "en");
        dispatch(setLanguage("en"));
      }
    }
    const storageCurrency = localStorage.getItem("userCurrency");
    if (
      storageCurrency &&
      (storageCurrency == "pln" ||
        storageCurrency == "eur" ||
        storageCurrency == "usd")
    ) {
      dispatch(setCurrency(storageCurrency));
    } else {
      const defaultLanguage = navigator.language;
      if (defaultLanguage.includes("pl")) {
        localStorage.setItem("userCurrency", "pln");
        dispatch(setCurrency("pln"));
      } else {
        localStorage.setItem("userCurrency", "eur");
        dispatch(setCurrency("eur"));
      }
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledComponentsRegistry>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <StyledAppContainer>
              <Header />
              <StyledApp>
                <Component {...pageProps} />
                <CookieConsent />
              </StyledApp>
              <Footer />
            </StyledAppContainer>
          </ThemeProvider>
        </Provider>
      </StyledComponentsRegistry>
    </>
  );
}
