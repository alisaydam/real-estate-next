import '../styles/globals.css'
 import { appWithTranslation } from "next-i18next";
import { AppProvider } from "../lib/state";

import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default appWithTranslation(MyApp);
