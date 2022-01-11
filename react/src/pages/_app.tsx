import "../styles/globals.css";
import type { AppProps } from "next/app";
import LayoutComp from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutComp>
      <Component {...pageProps} />
    </LayoutComp>
  );
}

export default MyApp;
