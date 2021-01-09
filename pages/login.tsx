import { NextPage } from "next";
import Head from "next/head";
import Particles from "react-tsparticles";
import LoginForm from "../src/components/LoginForm/LoginForm";
import options from "../tsparticle.config.json";
import { AppPageProps } from "./_app";

const LoginPage: NextPage<AppPageProps> = () => {
  return (
    <div className="main-bg">
      <Head>
        <title>GWShop | Sign In</title>
      </Head>
      <Particles id="tsparticles" options={options} />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
