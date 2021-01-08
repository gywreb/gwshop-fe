import Head from "next/head";
import Particles from "react-tsparticles";
import RegisterSuccess from "../../src/components/RegisterSuccess/RegisterSuccess";
import options from "../../tsparticle.config.json";

const RegisterSuccessPage = () => {
  return (
    <div className="main-bg">
      <Head>
        <title>GWShop | SignUp | Success</title>
      </Head>
      <Particles id="tsparticles" options={options} />
      <RegisterSuccess />
    </div>
  );
};

export default RegisterSuccessPage;
