import React from "react";
import LoginModal from "../Modals/LoginModal";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this line
const SignUpComp = ({ onClose }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="signbox1">
        <div className="content">
          <h2>Sign up</h2>
          <p>Create your free account 😎 </p>
        </div>
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Username" />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </FormGroup>
          <Link to="/homepage">
           
          <Button className="btnsign" >Sign up</Button>
          </Link>
          <div className="d-flex flex-column align-items-center">
            <Button className="btncontinue">
              <img className="me-3" src="/images/googleIcon.svg" alt="goole" />
              Continue with Google
            </Button>
            <Button className="btncontinue">
              <img className="me-3" src="/images/apleIcon.svg" alt="apple" />
              Continue with Apple
            </Button>
          </div>
          <div className="havean">
            <p>Already have an account?</p>
            <Button onClick={() => setModalShow(true)}>Login</Button>
            <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Form>
        <img
          className="bgMblLogin d-lg-none"
          src="/images/mbl-bg-login.png"
          alt="bg-svg"
        />
      </div>
    </>
  );
};

export default SignUpComp;
