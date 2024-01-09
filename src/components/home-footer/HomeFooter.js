import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Add this line
const HomeFooter = () => {
  return (
    <>
   
      <div className="position-relative">
        <div className="HomeFooter">
          <h3>Create Your Own Wardrobes</h3>
         
          <Button className="btnPrimary">
          <Link className="me-3" to="/createwardrobe">
            <img  src="/images/staricon.svg" alt="star" /> Let’s
            do this
            </Link>
          </Button>
          
        </div>
      </div>{" "}
    </>
  );
};

export default HomeFooter;
