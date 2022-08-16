import '../styles/globals.css'
 import { appWithTranslation } from "next-i18next";
import { AppProvider } from "../lib/state";
import Layout from "../components/layout";

import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["home"])),
    },
  };
}

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation();

  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}

export default appWithTranslation(MyApp);
