import { Button, Col, Layout, Row } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IUserInfo, RootState } from "../../store/types";
import Animator from "../Animator/Animator";

const AppHeader = () => {
  const user = useSelector<RootState, IUserInfo | null>(
    (state) => state.login.loggedUser
  );
  return (
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
              <h3>Welcome back {user.name}</h3>
            ) : (
              <>
                {" "}
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
  );
};

export default AppHeader;
