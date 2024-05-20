import React from "react";
import CreateWrdrobeHeader from "../../../components/headers/CreateWrdrobeHeader";
import { Col, Row } from "react-bootstrap";
import GuestSideBar from "../../../components/Sidebar/GuestSideBar";
import GuestGenrateForm from "../../../components/genrateForm/GuestGenrateForm";
import WelcomeHeader from "../../../components/headers/WelcomeHeader";
import UpdateWardrobeHeader from "../../../components/headers/UpdateWardrobeHeader";

const UpdateWardrobe = () => {
  return (
    <>
    
      <div className="crtWrdbMain">
        <div className="d-lg-none">
          <WelcomeHeader />
        </div>
        <UpdateWardrobeHeader />

        <Row className="m-0 p-0">
          <Col lg={2} className="ps-0 d-none d-lg-block">
            <GuestSideBar />
          </Col>
          <Col lg={10} className="pe-0">
            <GuestGenrateForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UpdateWardrobe;
