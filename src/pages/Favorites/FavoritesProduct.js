import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import HomeHeader from "../../components/headers/HomeHeader";
import FvrtProductBox from "../../components/favoriteProducts/FvrtProductBox";

const FavoritesProduct = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <HomeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col md={10} className="pe-0">
            <FvrtProductBox />
          </Col>
        </Row>
        <div className="BlurSvg">
          <img src="/images/attach-footer-blur.svg" alt="bg img" />
        </div>
      </div>
    </>
  );
};

export default FavoritesProduct;
