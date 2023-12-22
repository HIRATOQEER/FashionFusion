import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import GuestGenrateForm from "../../components/genrateForm/GuestGenrateForm";
import HomeHeader from "../../components/headers/HomeHeader";
import HomeBox from "../../components/home/HomeBox";
import HomeFooter from "../../components/home-footer/HomeFooter";

const HomePage = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <HomeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col md={10} className="pe-0">
            <HomeBox />
            {/* ------when no have wardrobe then show this div----- */}
            {/* <div className="NoHaveWardrobe">
              <img src="/images/no-have-wardrobe.png" alt="No Have Wordrobe" />
            </div> */}
          </Col>
        </Row>
        <HomeFooter />
      </div>
    </>
  );
};

export default HomePage;
