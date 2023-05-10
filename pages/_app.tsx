// COMPONENTS
import { Layout } from "../components/Layout.component";
import { MobileNavigation } from "../components/MobileNavigation.component";
import { Navigation } from "../components/Navigation.component";
// TYPES
import type { AppProps } from "next/app";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <MobileNavigation />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
