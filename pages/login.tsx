import Head from "next/head";
import Particles from "react-tsparticles";
import LoginForm from "../src/components/LoginForm/LoginForm";
import options from "../tsparticle.config.json";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>GWShop | SignIn</title>
      </Head>
      <div className="main-bg">
        <Particles id="tsparticles" options={options} />
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
