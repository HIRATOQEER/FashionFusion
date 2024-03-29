import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditSavedToast from "../Toasts/EditSavedToast";
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";
const RenameWardrobeModal = (props) => {
  const [wardrobeName, setWardrobeName] = useState(""); // State for input value
  const [showToast, setShowToast] = useState(false); // State for toast visibility
  const token = useSelector((state) => state.name);
  const handleInputChange = (e) => {
    setWardrobeName(e.target.value); // Update input value state
  };


  


  const handleButtonClick = () => {
  
    
    /*try {
     
      // Call the API function to send feedback
     
      console.log('Feedback submitted successfully:');
      const response = await renameWardrobe.saveWardrobe(wardrobeId, token,newName);
      // Handle successful response (e.g., show success message, close modal, etc.)
      console.log('Feedback submitted successfully:', response);
    //  props.onHide(); // Close the modal after successful submission
    } catch (error) {
      // Handle API errors (e.g., show error message)
      console.error('Error submitting feedback:', error.message);
      // Optionally, you can set state to display an error message to the user
    }

    setShowToast(true);
    setShowToast(true); // Show toast after saving
   */
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
