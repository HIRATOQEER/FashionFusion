import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RegenerateModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="viewReslt"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Generate New</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="tellResn">Tell us the reason (Optional)</p>
          <textarea
            className="addTxtCmnt mb-3 w-full d-block"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Comment"
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="btnrgtn">
            Cancel
          </Button>
          <Button className="btnPrfSubmit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RegenerateModal;
