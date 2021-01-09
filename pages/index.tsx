import { Button } from "antd";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Animator from "../src/components/Animator/Animator";
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
        <Link href="/register">
          <Button>SIGN UP</Button>
        </Link>
        <Link href="/login">
          <Button>SIGN IN</Button>
        </Link>
      </Animator>
    );
  else return <h1>Please wait a moment</h1>;
};

export default HomePage;
