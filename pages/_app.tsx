import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ColorModePreferencesProvider } from "../lib/colorModePreferencesContext";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <ColorModePreferencesProvider>
          <Component {...pageProps} />
        </ColorModePreferencesProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
