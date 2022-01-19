import "../styles/globals.css";
import "antd/dist/antd.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // グローバルなスタイリング
    <div className="bg-orange-100 min-h-screen pb-30">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
