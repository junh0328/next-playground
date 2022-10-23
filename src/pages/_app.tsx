import type { AppProps } from "next/app";
import Header from "@components/Header";

function MyApp({ Component, pageProps }: AppProps<any>) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
