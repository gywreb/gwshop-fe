import Head from "next/head";
import Animator from "../src/components/Animator/Animator";

const HomePage = () => {
  return (
    <Animator motion="fadeIn">
      <Head>
        <title>GWShop | Home</title>
      </Head>
      <h1 style={{ height: "2000px" }}>This is body</h1>
    </Animator>
  );
};

export default HomePage;
