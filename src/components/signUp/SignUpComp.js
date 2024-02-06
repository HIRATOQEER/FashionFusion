import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import { Button, Form, FormGroup } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";

import {  useDispatch } from 'react-redux';
import { updateName } from '../../store/actions';

const SignUpComp = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  
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

      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
  const handleSignUp = async () => {
    try {
      console.log("Signing up with:", email, password);

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User registered successfully:", user);

      // Save additional user data to Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userData = {
        displayName: username,
        email: email,
        photoURL: "",
      };

      //SHOW ALERT Registered Successfully
      await setDoc(userDocRef, userData);
      setModalShow(true);
      console.log("User data saved to Firestore:", userData);
    } catch (error) {
      //SHOW ALERT Already Registered
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <>
      <div className="signbox1">
        <div className="content">
          <h2>Sign up</h2>
          <p>Create your free account 😎</p>
        </div>
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <Button className="btnsign" onClick={handleSignUp}>Sign up</Button>
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
