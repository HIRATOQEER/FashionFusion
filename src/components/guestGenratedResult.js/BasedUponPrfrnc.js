import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const BasedUponPrfrnc = () => {
  return (
    <>
      <div className="BasedUponPrfrnc mb-5 mt-3">
        <p className="discptn mb-3">
          Products results based upon the given preferences
        </p>
        <div className="givenPrefrnc d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <img
              className="picIcon"
              src="/images/picture-Icon.svg"
              alt="icon"
            />
            <p className="imageURL">purpleShirt.jpg</p>
            <img
              className="selectedImage"
              src="/images/given-prefrnce-image-small.png"
              alt="select image"
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <Dropdown className="rstLinksDrp">
              <Dropdown.Toggle id="dropdown-basic" className="linksRslt">
                <img src="/images/link-Icon.svg" alt="icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <img
                    className="me-3"
                    src="/images/insta-Icon.svg"
                    alt="icon"
                  />
                  <span> https://www.instagram.com/insta_profile/</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <img className="me-3" src="/images/fcbIcon.svg" alt="icon" />
                  <span>https://www.facebook.com/fb_profile/</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p className="whoLink d-flex align-items-center gap-2">
              <img src="/images/fcb-black-Icon.svg" alt="icon" />
              <img src="/images/Instagram-black-icon.svg" alt="icon" />
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            {/* <Button className="PrfrncResult">
              <img src="/images/card-Icon.svg" alt="icon" />
            </Button> */}
            <Dropdown className="prfAttached">
              <Dropdown.Toggle id="dropdown-basic" className="PrfrncResult">
                <img src="/images/card-Icon.svg" alt="icon" />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  href="#/action-1"
                  className="d-flex align-items-center gap-4"
                >
                  <span className="prfSrNmbr">1</span>
                  <p>
                    <span className="prfNameCmn">Brand</span>
                    <span className="prfProductCmn">Furor</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Category</span>
                    <span className="prfProductCmn">Shirt</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Colur</span>
                    <span className="prColourCmn"></span>
                  </p>
                  <p>
                    <span className="prfNameCmn">PRICE</span>
                    <span className="prfProductCmn">0-5000 PKR</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">SIZE</span>
                    <span className="prfProductCmn">Large</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Quantity</span>
                    <span className="prfProductCmn">10</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">GENDER</span>
                    <span className="prfProductCmn">Male</span>
                  </p>
                </Dropdown.Item>
                <hr />
                <Dropdown.Item
                  href="#/action-2"
                  className="d-flex align-items-center gap-4"
                >
                  <span className="prfSrNmbr">1</span>
                  <p>
                    <span className="prfNameCmn">Brand</span>
                    <span className="prfProductCmn">Furor</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Category</span>
                    <span className="prfProductCmn">Shirt</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Colur</span>
                    <span className="prColourCmn"></span>
                  </p>
                  <p>
                    <span className="prfNameCmn">PRICE</span>
                    <span className="prfProductCmn">0-5000 PKR</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">SIZE</span>
                    <span className="prfProductCmn">Large</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">Quantity</span>
                    <span className="prfProductCmn">10</span>
                  </p>
                  <p>
                    <span className="prfNameCmn">GENDER</span>
                    <span className="prfProductCmn">Male</span>
                  </p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <p className="muchPrfrnc">2 Preferences</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasedUponPrfrnc;
