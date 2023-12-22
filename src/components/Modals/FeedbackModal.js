import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const FeedbackModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Please provide feedback </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-start">
            <p className="tellResn">Your feedback </p>

            <textarea
              className="addTxtCmnt mb-3 w-full d-block"
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Comment"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btnPrfSubmit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
