import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../../firebase";
import {  useDispatch } from 'react-redux';
import { updateName } from '../../store/actions';
import {   GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const LoginModal = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(firebaseApp);

  const db = getFirestore(firebaseApp);



  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account', // This ensures that the user is always prompted to select their Google account
      });
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      localStorage.setItem("token" , user);
      dispatch(updateName(user));

       //SHOW ALERT lOGGED iN  SUCCESSSFULLY
       navigate("/");
      
      console.log("User signed in with Google:", user.getIdToken());
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  
  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Retrieve additional user data from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        console.log("User data from Firestore:", userData);
        dispatch(updateName(userData));

        // You can then dispatch an action to store this data in your Redux store if needed
      } else {
        console.log("No user data found in Firestore");
      }
      localStorage.setItem("token", user);
      console.log("Token" , user.getIdToken())

      navigate("/");
    } catch (error) {
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
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
            <FormGroup controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <Button className="btnsign" onClick={handleLogin}>Sign In</Button>
            <div className="d-flex flex-column align-items-center">
            <button className="btncontinue" onClick={handleGoogleSignIn}>
            <img className="me-3" src="/images/googleIcon.svg" alt="goole" />

              Continue with Google
            </button>
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
