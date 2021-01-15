import { Button, Col, Layout, Row, Typography } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../store/action";
import { IUserInfo, RootState } from "../../store/types";
import Animator from "../Animator/Animator";

const AppHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector<RootState, IUserInfo | null>(
    (state) => state.login.loggedUser
  );
  const router = useRouter();
  return (
    <>
      {router.pathname === "/login" ||
      router.pathname === "/register" ||
      router.pathname === "/register/success" ? null : (
        <Animator motion="fadeIn">
          <Layout.Header className="app-header">
            <Row className="jc-between">
              <Col className="centerize">
                <img
                  src="/image/logo/gwshop_logo_crop.png"
                  alt="logo"
                  style={{ maxWidth: 120 }}
                />
              </Col>
              <Col>
                {user ? (
                  <>
                    <Typography.Text>Welcome back {user.name}</Typography.Text>
                    <Button
                      className="ml-2"
                      onClick={() => dispatch(loginAction.logout())}
                    >
                      SIGN OUT
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/register">
                      <Button>SIGN UP</Button>
                    </Link>
                    <Link href="/login">
                      <Button>SIGN IN</Button>
                    </Link>
                  </>
                )}
              </Col>
            </Row>
          </Layout.Header>
        </Animator>
      )}
    </>
  );
};

export default AppHeader;
