import React from "react";
import { Row, Col } from "antd";
import logo from "../assets/HeaderLogo.png";

import "./HeaderLogo.css";

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <Row justify="center">
          {/* <div className="header_logo"> */}
            <img src={logo} alt="logo" />
          {/* </div> */}
      </Row>
    </div>
  );
};

export default HeaderLogo;
