import React from "react";
import { Button } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <>
      <div className="position-relative">
        <div className="HomeFooter">
          <h3>Create Your Own Wardrobes</h3>
          <Button className="btnPrimary">
            <img className="me-3" src="/images/staricon.svg" alt="star" /> Let’s
            do this
          </Button>
        </div>
      </div>{" "}
    </>
  );
};

export default HomeFooter;
