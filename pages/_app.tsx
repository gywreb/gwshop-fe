import { Layout } from "antd";
import { AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
import AppHeader from "../src/components/AppHeader/AppHeader";
import AuthProvider from "../src/components/AuthProvider/AuthProvider";
import store from "../src/store";
import "../styles/global.scss";

NProgress.configure({
  trickleSpeed: 100,
  showSpinner: false,
});

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

export interface AppPageProps {
  tokenInCookie: string;
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const tokenInCookie = Cookies.get("token");

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <AuthProvider>
          <Layout style={{ background: "#fff" }}>
            <AppHeader />
            <Layout.Content>
              <Component {...pageProps} tokenInCookie={tokenInCookie} />
            </Layout.Content>
          </Layout>
        </AuthProvider>
      </AnimatePresence>
    </Provider>
  );
};

export default MyApp;
