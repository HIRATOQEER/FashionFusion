import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import feedbackSvc from '../../services/feedback'

const FeedbackModal = (props) => {
  const [comment, setComment] = useState('');
  const token = useSelector((state) => state.name); // Assuming state.name returns a Promise
 
 const data = {
    "user_id": "hira",
    "feedback_id": "123",
   "comments": comment
  };
 


  console.log("USERNAMETOKEN", token);

 

  const handleSubmit = async () => {
    try {
    
   
      // Call the API function to send feedback
      console.log('Feedback submitted successfully:');
      const response = await feedbackSvc.giveFeedback(token, data);
      // Handle successful response (e.g., show success message, close modal, etc.)
      console.log('Feedback submitted successfully:', response);
      props.onHide(); // Close the modal after successful submission
    } catch (error) {
      // Handle API errors (e.g., show error message)
      console.error('Error submitting feedback:', error.message);
      // Optionally, you can set state to display an error message to the user
    }
  };
  
  const handleTextareaChange = (event) => {
    setComment(event.target.value);
  }

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
              value={comment}
              onChange={handleTextareaChange}
              name=""
              id=""
              cols="30"
              rows="1"
              placeholder="Comment"
            ></textarea>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="btnPrfSubmit" onClick={handleSubmit} >Submit </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedbackModal;
