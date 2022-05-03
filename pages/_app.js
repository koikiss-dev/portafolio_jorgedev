import "../styles/globals.css";
import { GlobalStyle } from "../styles/ResetCss";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src="https://unpkg.com/boxicons@2.1.2/dist/boxicons.js"></Script>

      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
