import { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Provider } from "react-redux";
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

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
