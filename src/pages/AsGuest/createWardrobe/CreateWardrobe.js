import React from "react";
import CreateWrdrobeHeader from "../../../components/headers/CreateWrdrobeHeader";
import { Col, Row } from "react-bootstrap";
import GuestSideBar from "../../../components/Sidebar/GuestSideBar";
import GuestGenrateForm from "../../../components/genrateForm/GuestGenrateForm";

const CreateWardrobe = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <CreateWrdrobeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0">
            <GuestSideBar />
          </Col>
          <Col md={10} className="pe-0">
            <GuestGenrateForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CreateWardrobe;
