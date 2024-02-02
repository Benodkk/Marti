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

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
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
              </StyledApp>
              <Footer />
            </StyledAppContainer>
          </ThemeProvider>
        </Provider>
      </StyledComponentsRegistry>
    </>
  );
}
