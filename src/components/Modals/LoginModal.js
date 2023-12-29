import React from "react";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const LoginModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="loginModal"
      >
        <Modal.Header closeButton className="border-0"></Modal.Header>
        <Modal.Body>
          <h2>Login</h2>
          <p>Just email and password and you’re good to go</p>
          <Form>
            <FormGroup className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </FormGroup>
            <Button className="btnsign">Sign up</Button>
            <div className="d-flex flex-column align-items-center">
              <Button className="btncontinue">
                <img
                  className="me-3"
                  src="/images/googleIcon.svg"
                  alt="goole"
                />
                Continue with Google
              </Button>
              <Button className="btncontinue">
                <img className="me-3" src="/images/apleIcon.svg" alt="apple" />
                Continue with Apple
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <img
          className="bgMblLogin d-lg-none"
          src="/images/mbl-bg-login.png"
          alt="bg-svg"
        />
      </Modal>
    </>
  );
};

export default LoginModal;
