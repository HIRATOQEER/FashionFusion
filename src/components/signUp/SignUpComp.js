import React , {useState} from "react";
import LoginModal from "../Modals/LoginModal";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebaseApp from "../../firebase"; 




const SignUpComp = ({ onClose }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  

  const handleGoogleSignIn = async (googleUser) => {
    try {
      const credential = GoogleAuthProvider.credentialFromResult(googleUser);
      const userCredential = await signInWithPopup(auth, credential);
      const user = userCredential.user;
      console.log("User signed in with Google:", user);
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  
  
  };

  const handleGoogleSignInFailure = (error) => {
    console.error("Google Sign-In failure:", error);
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
        username: username,
        email: email,
        photo_uri: "",
        
      };
        //SHOW ALERT Registered Successfully

      await setDoc(userDocRef, userData);
      setModalShow(true)
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
          <p>Create your free account 😎 </p>
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
          <Button className="btnsign" onClick={handleSignUp}>
            Sign up
          </Button>
          <div className="d-flex flex-column align-items-center">
           <GoogleLogin
          clientId={googleClientId}
          buttonText="Continue with Google"
          onSuccess={handleGoogleSignIn}
          onFailure={handleGoogleSignInFailure}
          cookiePolicy={'single_host_origin'}
          className="btncontinue"
         />
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
