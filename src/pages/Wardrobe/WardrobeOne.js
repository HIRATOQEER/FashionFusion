import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeHeader from "../../components/headers/HomeHeader";
import WardrobeOneResult from "../../components/WardrobeResult/WardrobeOneResult";

const WardrobeOne = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <HomeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col md={10} className="pe-0">
            <div className="genratedResult">
              <WardrobeOneResult />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default WardrobeOne;
