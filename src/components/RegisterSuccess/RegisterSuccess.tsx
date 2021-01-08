import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";

const RegisterSuccess = () => {
  return (
    <Row className="centerize full-view-height">
      <Col xs={23} lg={12}>
        <Card className="card-shadow br-5">
          <div className="centerize">
            <img
              src="/image/logo/gwshop_logo_crop.png"
              alt="logo"
              style={{ width: 320 }}
            />
          </div>
          <Typography.Title
            level={2}
            className="centerize pt-2 text-primary letter-spacing"
          >
            CONGRATULATION
          </Typography.Title>
          <Typography.Title level={4} className="centerize pt-1">
            Enjoy your shopping!
          </Typography.Title>
          <div className="centerize pt-3 pb-2">
            <Button size="large" type="primary" className="letter-spacing br-4">
              GO TO LOGIN PAGE
            </Button>
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default RegisterSuccess;
