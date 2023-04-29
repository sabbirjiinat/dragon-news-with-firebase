import React from "react";


import { Col, Container, Row } from "react-bootstrap";

import { Outlet } from "react-router-dom";
import NavigationBar from "../../SharedPage/NavigationBar/NavigationBar";
import RightNavigation from "../../SharedPage/RightNavigation/RightNavigation";
import Footer from "../../SharedPage/Footer/Footer";
const NewsDetailsLayout = () => {
    return (
        <div>
             <NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col lg={9}>
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

export default NewsDetailsLayout;