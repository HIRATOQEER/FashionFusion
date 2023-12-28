import React from "react";
import SortedBy from "../sorted/SortedBy";
import { Button, Col, Row } from "react-bootstrap";
import FavoriteProductCard from "../Cards/FavoriteProductCard";
import FeedbackModal from "../Modals/FeedbackModal";

const FvrtProductBox = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="FvrtProductBox">
        <SortedBy />
        <Row className="p-0 m-0">
          <Col md={6}>
            <FavoriteProductCard />
          </Col>
          <Col md={6}>
            <FavoriteProductCard />
          </Col>
        </Row>
        <Button className="btnFeedBack my-4" onClick={() => setModalShow(true)}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default FvrtProductBox;
