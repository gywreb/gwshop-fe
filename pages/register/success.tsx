import Head from "next/head";
import Particles from "react-tsparticles";
import Animator from "../../src/components/Animator/Animator";
import RegisterSuccess from "../../src/components/RegisterSuccess/RegisterSuccess";
import options from "../../tsparticle.config.json";

const RegisterSuccessPage = () => {
  return (
    <Animator motion="fadeIn">
      <div className="main-bg">
        <Head>
          <title>GWShop | SignUp | Success</title>
        </Head>
        <Animator motion="fadeIn">
          <Particles id="tsparticles" options={options} />
        </Animator>
        <Animator motion="slideLeftIn">
          <RegisterSuccess />
        </Animator>
      </div>
    </Animator>
  );
};

export default RegisterSuccessPage;
