import React from "react";
import { Button } from "react-bootstrap";

const WelcomeHeader = () => {
  return (
    <>
      <div className="welcomHeader">
        <div className="d-flex align-items-center ">
          <img
            className="me-3"
            src="/images/Welcomelogo.png"
            alt="welcom logo"
          />
          <h2>Fashion Fusion</h2>
        </div>
        <div className="makeAccount">
          <p>Make your products saved in your account</p>
          <Button>Login</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;
