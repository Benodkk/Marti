import { Header } from "@/components/Header/Header";
import { GlobalStyle } from "@/styles/Global";
import { StyledApp, StyledAppContainer } from "@/styles/app.styled";
import StyledComponentsRegistry from "@/styles/registry";
import { theme } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <StyledAppContainer>
            <Header />
            <StyledApp>
              <Component {...pageProps} />
            </StyledApp>
          </StyledAppContainer>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
}
