import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditSavedToast from "../Toasts/EditSavedToast";

const RenameWardrobeModal = (props) => {
  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Rename Wardrobe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder="Your Wardrobe"
            className="renameWrb"
          />
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button onClick={props.onHide} className="btnrgtn">
            Cancel
          </Button>

          <div>
            <Button className="btnPrfSubmit" onClick={handleButtonClick}>
              Save
            </Button>

            <EditSavedToast showToast={showToast} onClose={handleCloseToast} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RenameWardrobeModal;
