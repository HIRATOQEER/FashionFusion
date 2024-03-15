import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Modals/LoginModal";
import { Button, Form, FormGroup } from "react-bootstrap";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendEmailVerification } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase";

import {  useDispatch } from 'react-redux';
import { updateName } from '../../store/actions';
import { onAuthStateChanged } from 'firebase/auth';


const SignUpComp = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [modalShow, setModalShow] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);
  console.log("AUTH " , auth)
  const db = getFirestore(firebaseApp);

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  
  const handleGoogleSignIn = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("AUTH " , auth)

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: 'select_account', // This ensures that the user is always prompted to select their Google account
      });
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      localStorage.setItem("token" , user);
      dispatch(updateName(user.getIdToken()));
      console.log(user)
      console.log(userCredential)


       //SHOW ALERT lOGGED iN  SUCCESSSFULLY
       navigate("/");

      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  };
const handleSignUp = async () => {
  try {
    
    
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log(auth.currentUser);

    await sendEmailVerification(auth.currentUser);

    // Wait for email verification, checking periodically
    const waitForEmailVerification = () => new Promise((resolve, reject) => {
      const timeout = 30 * 1000; // 30 seconds
      const interval = 1000; // Check every second
      const endTime = Date.now() + timeout;

      const intervalId = setInterval(async () => {
        const isEmailVerified = await handleEmailVerificationCheck();
        if (isEmailVerified) {
          clearInterval(intervalId);
          resolve();
        } else if (Date.now() >= endTime) {
          const user = auth.currentUser;
        if (user) {
          user.delete()
            .then(() => console.log("User deleted successfully"))
            .catch(error => console.error("Error deleting user:", error));
        }

          clearInterval(intervalId);
          reject(new Error("Email verification timed out"));
        }
      }, interval);
    });

    await waitForEmailVerification();

    // Proceed with user creation after email verification
    const user = userCredential.user;



    // Save additional user data to Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userData = {
      displayName: username,
      email: email,
      photoURL: "",
    };

    await setDoc(userDocRef, userData);

    // Show alert or message indicating successful registration
    setModalShow(true);
    console.log("User data saved to Firestore:", userData);
  } catch (error) {
    // Show error message
    console.error("Error signing up:", error.message);
  }
};

// Rest of the code remains unchanged

  // You can call this function whenever you want to check if the email has been verified
const checkEmailVerification = async () => {
  try {
    // Ensure user is signed in
    if (!auth.currentUser) {
      throw new Error("User is not signed in.");
    }

    // Refresh user's authentication state
    await auth.currentUser.reload();

    // Check if email is verified
    if (auth.currentUser.emailVerified) {
      // Email is verified
      console.log("Email is verified.");
      return true;
    } else {
      // Email is not verified
      console.log("Email is not verified.");
      return false;
    }
  } catch (error) {
    console.error("Error checking email verification:", error.message);
    throw error;
  }
};

const handleEmailVerificationCheck = async () => {
  try {
    // Call the function to check email verification
    const isEmailVerified = await checkEmailVerification();
    console.log("Is email verified:", isEmailVerified);
    return isEmailVerified;
    // You can use the value of isEmailVerified as needed
  } catch (error) {
    // Handle errors if any
    console.error("Error:", error.message);
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
