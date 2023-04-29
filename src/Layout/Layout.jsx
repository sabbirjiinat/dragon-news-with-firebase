import React from "react";
import NavigationBar from "../SharedPage/NavigationBar/NavigationBar";
import Footer from "../SharedPage/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import RightNavigation from "../SharedPage/RightNavigation/RightNavigation";
import LeftNavigation from "../SharedPage/LeftNavigation/LeftNavigation";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const Layout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Navigation></Navigation>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNavigation></LeftNavigation>
          </Col>
          <Col lg={6}>
        <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNavigation></RightNavigation>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
