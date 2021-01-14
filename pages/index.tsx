import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Animator from "../src/components/Animator/Animator";
import LoadingIndicator from "../src/components/LoadingIndicator/LoadingIndicator";
import { loginAction } from "../src/store/action";
import { AppPageProps } from "./_app";

const HomePage: NextPage<AppPageProps> = ({ tokenInCookie }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (!!!tokenInCookie) {
      dispatch({ type: loginAction.LOGIN_RESET });
      router.push("/login");
    }
  }, [tokenInCookie]);

  if (tokenInCookie)
    return (
      <Animator motion="fadeIn">
        <Head>
          <title>GWShop | Home</title>
        </Head>
      </Animator>
    );
  else return <LoadingIndicator />;
};

export default HomePage;
