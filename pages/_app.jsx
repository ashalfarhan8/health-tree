import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import Font from "../styles/Font";
// import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
