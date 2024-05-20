import React, { useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletionModal = (props) => {


  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <p className="rmvPrdct">Confirm Deletion</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-start pt-3">
            <p className="tellResn">
              Are you sure you want to remove everything?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={props.onHide} className="cancelPrv">
            No, don’t
          </Button>
          <Button className="btnPrfSubmit">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeletionModal;
