import Head from "next/head";
import Particles from "react-tsparticles";
import RegisterForm from "../../src/components/RegisterForm/RegisterForm";
import options from "../../tsparticle.config.json";

const RegisterPage = () => {
  return (
    <div className="main-bg">
      <Head>
        <title>GWShop | SignUp</title>
      </Head>
      <Particles id="tsparticles" options={options} />
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
