import React, { useState } from "react";
import BasedUponPrfrnc from "./BasedUponPrfrnc";

import { Button, Dropdown } from "react-bootstrap";
const GuestGenratedResult = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showZoom, setShowZoom] = useState(false);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
    setShowZoom(!showZoom);
  };

  const handleRemoveButtonClick = () => {
    setShowDropdown(false);
    setShowZoom(false);
  };

  return (
    <>
      <BasedUponPrfrnc />
      <div className="yourWardrobe">
        <h3 className="yur">Your Wardrobe</h3>
        <div className="prfrncResult">
          <Dropdown
            show={showDropdown}
            onToggle={() => {}}
            className="viewReslt"
          >
            <Dropdown.Toggle
              className={`resultImgInner ${showZoom ? "zoomed" : ""}`}
              onClick={handleButtonClick}
            >
              <img
                className="productImg"
                src="/images/given-prefrnce-image-1.png"
                alt="picture"
              />

              <Button className="btnRemoveClose">
                <img src="/images/close-Icon.svg" alt="icon" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                <p className="rmvPrdct">Removing Product</p>
                <Button
                  className="btnCloseDrp"
                  onClick={handleRemoveButtonClick}
                >
                  <img src="/images/close-Icon.svg" alt="icon" />
                </Button>
              </div>
              <hr />
              <div className="p-3">
                <p className="tellResn">Tell us the reason (Optional)</p>
                <div className="d-flex align-itmes-center gap-2 mb-3">
                  <span className="rmvPrfTagg">Price</span>
                  <span className="rmvPrfTagg">Size</span>
                  <span className="rmvPrfTagg">Color</span>
                  <span className="rmvPrfTagg">Brand</span>
                  <span className="rmvPrfTagg">Gender</span>
                </div>
                <textarea
                  className="addTxtCmnt mb-3 w-full d-block"
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Comment"
                ></textarea>
                <Button className="btnPrfSubmit">Submit</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            show={showDropdown}
            onToggle={() => {}}
            className="viewReslt"
          >
            <Dropdown.Toggle
              className={`resultImgInner ${showZoom ? "zoomed" : ""}`}
              onClick={handleButtonClick}
            >
              <img
                className="productImg"
                src="/images/given-prefrnce-image-2.png"
                alt="picture"
              />

              <Button className="btnRemoveClose">
                <img src="/images/close-Icon.svg" alt="icon" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                <p className="rmvPrdct">Removing Product</p>
                <Button
                  className="btnCloseDrp"
                  onClick={handleRemoveButtonClick}
                >
                  <img src="/images/close-Icon.svg" alt="icon" />
                </Button>
              </div>
              <hr />
              <div className="p-3">
                <p className="tellResn">Tell us the reason (Optional)</p>
                <div className="d-flex align-itmes-center gap-2 mb-3">
                  <span className="rmvPrfTagg">Price</span>
                  <span className="rmvPrfTagg">Size</span>
                  <span className="rmvPrfTagg">Color</span>
                  <span className="rmvPrfTagg">Brand</span>
                  <span className="rmvPrfTagg">Gender</span>
                </div>
                <textarea
                  className="addTxtCmnt mb-3 w-full d-block"
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Comment"
                ></textarea>
                <Button className="btnPrfSubmit">Submit</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            show={showDropdown}
            onToggle={() => {}}
            className="viewReslt"
          >
            <Dropdown.Toggle
              className={`resultImgInner ${showZoom ? "zoomed" : ""}`}
              onClick={handleButtonClick}
            >
              <img
                className="productImg"
                src="/images/given-prefrnce-image-3.png"
                alt="picture"
              />

              <Button className="btnRemoveClose">
                <img src="/images/close-Icon.svg" alt="icon" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                <p className="rmvPrdct">Removing Product</p>
                <Button
                  className="btnCloseDrp"
                  onClick={handleRemoveButtonClick}
                >
                  <img src="/images/close-Icon.svg" alt="icon" />
                </Button>
              </div>
              <hr />
              <div className="p-3">
                <p className="tellResn">Tell us the reason (Optional)</p>
                <div className="d-flex align-itmes-center gap-2 mb-3">
                  <span className="rmvPrfTagg">Price</span>
                  <span className="rmvPrfTagg">Size</span>
                  <span className="rmvPrfTagg">Color</span>
                  <span className="rmvPrfTagg">Brand</span>
                  <span className="rmvPrfTagg">Gender</span>
                </div>
                <textarea
                  className="addTxtCmnt mb-3 w-full d-block"
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Comment"
                ></textarea>
                <Button className="btnPrfSubmit">Submit</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            show={showDropdown}
            onToggle={() => {}}
            className="viewReslt"
          >
            <Dropdown.Toggle
              className={`resultImgInner ${showZoom ? "zoomed" : ""}`}
              onClick={handleButtonClick}
            >
              <img
                className="productImg"
                src="/images/given-prefrnce-image-1.png"
                alt="picture"
              />

              <Button className="btnRemoveClose">
                <img src="/images/close-Icon.svg" alt="icon" />
              </Button>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                <p className="rmvPrdct">Removing Product</p>
                <Button
                  className="btnCloseDrp"
                  onClick={handleRemoveButtonClick}
                >
                  <img src="/images/close-Icon.svg" alt="icon" />
                </Button>
              </div>
              <hr />
              <div className="p-3">
                <p className="tellResn">Tell us the reason (Optional)</p>
                <div className="d-flex align-itmes-center gap-2 mb-3">
                  <span className="rmvPrfTagg">Price</span>
                  <span className="rmvPrfTagg">Size</span>
                  <span className="rmvPrfTagg">Color</span>
                  <span className="rmvPrfTagg">Brand</span>
                  <span className="rmvPrfTagg">Gender</span>
                </div>
                <textarea
                  className="addTxtCmnt mb-3 w-full d-block"
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                  placeholder="Comment"
                ></textarea>
                <Button className="btnPrfSubmit">Submit</Button>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 ">
          <p className="gnrtDiscrptn">
            <img src="/images/question-mark-Icon.svg" alt="icon" />
            You can save this wardrobe as it is or you can regenerate for some
            new results
          </p>
          <Button className="regenrete">
            <img src="/images/refresh-Icon.svg" alt="icon" /> Regenerate
          </Button>
        </div>
      </div>
      <Button className="btnPrimary mx-auto mt-5 mb-3">
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default GuestGenratedResult;
