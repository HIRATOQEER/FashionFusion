import React, { useState } from "react";
import SortedBy from "../sorted/SortedBy";
import { Button, Col, Row } from "react-bootstrap";
import FavoriteProductCard from "../Cards/FavoriteProductCard";
import FeedbackModal from "../Modals/FeedbackModal";

const FvrtProductBox = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleButtonClick = () => {
    setModalShow(!modalShow); // Toggle the modal state
  };
  return (
    <>
      <div className="FvrtProductBox">
        <SortedBy />
        <Row className="p-0 m-0 pe-3 g-3">
          <Col xl={6}>
            <FavoriteProductCard />
          </Col>
          <Col xl={6}>
            <FavoriteProductCard />
          </Col>
        </Row>
        <Button className="btnFeedBack my-4" onClick={handleButtonClick}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default FvrtProductBox;
