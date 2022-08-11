import '../styles/globals.css'
 import { appWithTranslation } from "next-i18next";
import { MovieProvider } from "../lib/state";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <MovieProvider>
        <Component {...pageProps} />
      </MovieProvider>
    </Layout>
  );
}

export default appWithTranslation(MyApp);
