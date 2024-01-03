import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ProductDtails = (props) => {
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
            <p className="rmvPrdct">
              Please provide feedback{" "}
              <span className="optionss">(Optional)</span>
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <p className="tellResn">Tell us the reason of removing</p>
              <div className="dtlTagg d-flex align-items-center gap-2 mb-3">
                <span className="tagg">Price</span>
                <span className="tagg">Size</span>
                <span className="tagg">Color</span>
                <span className="tagg">Brand</span>
                <span className="tagg">Gender</span>
              </div>
              <img
                className="prvImage d-none d-lg-block"
                src="/images/modal-prview-image.png"
                alt="pic"
              />
            </div>
          </div>
          <textarea
            className="addTxtCmnt mb-3 w-full d-block"
            name=""
            id=""
            cols="30"
            rows="1"
            placeholder="Comment"
          ></textarea>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={props.onHide} className="cancelPrv">
            Cancel
          </Button>
          <Button className="btnPrfSubmit">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductDtails;
