import React from "react";
import { Col, Row } from "react-bootstrap";
import UserSideBar from "../../components/Sidebar/UserSideBar";
import CreateWrdrobeHeader from "../../components/headers/CreateWrdrobeHeader";
import GuestGenrateForm from "../../components/genrateForm/GuestGenrateForm";

const UserCreateWrdb = () => {
  return (
    <>
      <div className="crtWrdbMain">
        <CreateWrdrobeHeader />
        <Row className="m-0 p-0">
          <Col md={2} className="ps-0">
            <UserSideBar />
          </Col>
          <Col md={10} className="pe-0">
            <GuestGenrateForm />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserCreateWrdb;
