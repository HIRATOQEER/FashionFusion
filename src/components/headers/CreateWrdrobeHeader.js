import React from "react";

const CreateWrdrobeHeader = () => {
  return (
    <>
      <div className="crtWrdbHeader">
        <img
          className="logo"
          src="/images/create-wardrobe-headerlogo.png"
          alt="logo"
        />
        <div className="WrdbHeaderBox">
          <h2>
            <img
              className="me-3"
              src="/images/bluestar-Icon.svg"
              alt="start icon"
            />
            Create Your Own Wardrobes
          </h2>
          <p>Select your way of generating wardrobes</p>
        </div>
      </div>
    </>
  );
};

export default CreateWrdrobeHeader;
