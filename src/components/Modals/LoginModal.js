import React , {useState} from "react";
import { useNavigate } from "react-router-dom";

import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getAuth,signInWithEmailAndPassword,  } from "firebase/auth";
import firebaseApp from "../../firebase"; 



const LoginModal = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

    const handleLogin = async () => {
    try {
      console.log("Logging in with:", email, password);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      //SHOW ALERT lOGGED iN  SUCCESSSFULLY
      navigate("/");

    } catch (error) {
      //SHOW ALERT INVALID CREDNETAILS
      console.error("Error logging in:", error.message);
    }
  };
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
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>

            <FormGroup controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
 />
            </FormGroup>
            <Button className="btnsign" onClick={handleLogin}>Sign In</Button>
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
