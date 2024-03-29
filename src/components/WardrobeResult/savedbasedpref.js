import React from "react";
import { Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";


  const SavedBasedUponPrfrnc = ({ uploadedImage = [], manualPreferences = {}, mediaLinks = {} }) => {
    const { facebookLink = '', instagramLink = '' } = mediaLinks;
    const { preferences = [] } = manualPreferences;
  
    return (
      <>
        <div className="BasedUponPrfrnc mb-5 mt-3">
          <p className="discptn mb-3">
            Products results based upon the given preferences
          </p>
          {uploadedImage.length > 0 && (
            <div className="givenPrefrnc d-flex flex-column flex-lg-row align-items-lg-center gap-4">
              <div className="d-flex align-items-center gap-2">
                {uploadedImage.map((image, index) => (
                  <div key={index} className="d-flex align-items-center gap-2">
                    <p className="imageURL">{image.name}</p>
                    <img
                      className="selectedImage"
                      src={image.dataURL} // Use the dataURL property
                      alt={`Uploaded Image ${index + 1}`}
                      style={{ maxWidth: "100px", maxHeight: "100px" }} // Adjust dimensions as needed
                    />
                  </div>
                ))}
              </div>
              <div className="d-flex align-items-center gap-2">
                {instagramLink && facebookLink && (
                  <Dropdown className="rstLinksDrp">
                    <Dropdown.Toggle id="dropdown-basic" className="linksRslt">
                      <img src="/images/link-Icon.svg" alt="icon" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {instagramLink && (
                        <Dropdown.Item href={instagramLink}>
                          <img className="me-3" src="/images/insta-Icon.svg" alt="icon" />
                          <span>{instagramLink}</span>
                        </Dropdown.Item>
                      )}
                      {facebookLink && (
                        <Dropdown.Item href={facebookLink}>
                          <img className="me-3" src="/images/fcbIcon.svg" alt="icon" />
                          <span>{facebookLink}</span>
                        </Dropdown.Item>
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                )}
                <p className="whoLink d-flex align-items-center gap-2">
                  {facebookLink && <img src="/images/fcb-black-Icon.svg" alt="icon" />}
                  {instagramLink && <img src="/images/Instagram-black-icon.svg" alt="icon" />}
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <Dropdown className="prfAttached">
                  <Dropdown.Toggle id="dropdown-basic" className="PrfrncResult">
                    <img src="/images/card-Icon.svg" alt="icon" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {preferences.map((preference, index) => (
                      <Dropdown.Item
                        key={index}
                        href="#/action-1"
                        className="d-flex align-items-lg-center align-items-start gap-4"
                      >
                        {/* Render preference details */}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <p className="muchPrfrnc">{preferences.length} Preferences</p>
              </div>
            </div>
          )}
          {uploadedImage.length === 0 && (
            <p className="empty-data-message">No uploaded images found.</p>
          )}
        </div>
      </>
    );
  };
  
  export default SavedBasedUponPrfrnc;