import { Button } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/types";

const HomePage = () => {
  const router = useRouter();
  const accessToken = useSelector<RootState, string | null>(
    (state) => state.login.accessToken
  );

  useEffect(() => {
    if (!!!accessToken) router.push("/login");
  }, [accessToken]);

  if (accessToken)
    return (
      <>
        <Link href="/register">
          <Button>SIGN UP</Button>
        </Link>
        <Link href="/login">
          <Button>SIGN IN</Button>
        </Link>
      </>
    );
  else return <h1>Please wait a moment</h1>;
};

export default HomePage;
