import React from "react";
import { Button, Dropdown } from "react-bootstrap";

const UserSideBar = () => {
  return (
    <>
      <div className="UserSidebar">
        <ul className="p-0 m-0 d-flex flex-column gap-4">
          <li className="firstUr">
            <a href="#" className="me-0">
              <img src="/images/white-star-Group.svg" alt="icon" />
            </a>
          </li>
          <div className="innerOrder d-flex flex-column gap-4">
            <li>
              <a href="#">
                <img src="/images/noun-home.svg" alt="home" />
                <span className="prnName">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Dropdown className="showDtl">
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src="/images/noun-wardrobe.svg" alt="home" />
                    <span className="sameStl">My Wardrobes</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <p className="whoDay">Today</p>
                    <Dropdown.Item href="#/action-1">Wardrobe 1</Dropdown.Item>
                    <p className="whoDay">Yesterday</p>
                    <div className="wrdpss">
                      <Dropdown.Item href="#/action-2">
                        Wardrobe 1
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Wardrobe 2
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Wardrobe 3
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/Generic-heart.svg" alt="favrt" />
                <span className="sameStl">Favorites</span>
              </a>
            </li>
            <li>
              <a href="#">
                <Dropdown className="showDtl Notification">
                  <Dropdown.Toggle id="dropdown-basic">
                    <img src="/images/noun-bell.svg" alt="home" />
                    <span className="sameStl">Notifications</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <div className="ntfHdr d-flex justify-content-between align-items-center p-3 pb-0">
                      <p className="hding">Notifications</p>
                      <Button className="btnSimple">
                        <img src="/images/close-Icon.svg" alt="icon" />
                      </Button>
                    </div>
                    <hr />
                    {/* ----when you have no notification then show this img------ */}
                    {/* <div className="NoNotifications">
                      <img
                        src="/images/No-notifications-1.png"
                        alt="Nothing No"
                      />
                    </div> */}
                    <p className="whoDay">3 New Notifications</p>
                    <div className="Notifctns">
                      <Dropdown.Item href="#" className="notificationNew">
                        <div>
                          <p className="newNft">
                            Your variation just got an update!
                          </p>
                          <span className="newNft">
                            <strong className="NftNmbr">Wardrobe 1</strong> has
                            4 new items you would like
                          </span>
                        </div>
                        <h4 className="tagNft">New</h4>
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="notificationNew">
                        <div>
                          <p className="newNft">
                            Your variation just got an update!
                          </p>
                          <span className="newNft">
                            <strong className="NftNmbr">Wardrobe 1</strong> has
                            4 new items you would like
                          </span>
                        </div>
                        <h4 className="tagNft">New</h4>
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="notificationNew">
                        <div>
                          <p className="newNft">
                            Your variation just got an update!
                          </p>
                          <span className="newNft">
                            <strong className="NftNmbr">Wardrobe 1</strong> has
                            4 new items you would like
                          </span>
                        </div>
                        <h4 className="tagNft">New</h4>
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className="userPrf">
              <Dropdown className="showDtl">
                <Dropdown.Toggle id="dropdown-basic">
                  <img src="/images/sidebr-prf-image.png" alt="Profile Icon" />
                  <span className="prnName fw-bold">Nick Anderson</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#" className="profiledrp">
                    <img
                      className="me-3"
                      src="/images/profile-icon.svg"
                      alt="icon"
                    />
                    Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#" className="profiledrp">
                    <img
                      className="me-3"
                      src="/images/logout-icon.svg"
                      alt="icon"
                    />
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserSideBar;
