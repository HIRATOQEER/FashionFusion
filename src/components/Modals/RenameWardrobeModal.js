import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditSavedToast from "../Toasts/EditSavedToast";

const RenameWardrobeModal = (props) => {
  const [wardrobeName, setWardrobeName] = useState(""); // State for input value
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  const handleInputChange = (e) => {
    setWardrobeName(e.target.value); // Update input value state
  };

  const handleButtonClick = () => {
    // Perform actions with the updated wardrobeName state (e.g., save it)
    console.log("Wardrobe name saved:", wardrobeName);
    setShowToast(true); // Show toast after saving
  };

  const handleCloseToast = () => {
    setShowToast(false); // Close toast
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
            value={wardrobeName}
            onChange={handleInputChange} // Handle input change
          />
        </Modal.Body>
        <Modal.Footer className="border-0 d-flex align-items-center">
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
