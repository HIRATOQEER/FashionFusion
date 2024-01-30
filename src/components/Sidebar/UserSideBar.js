import React, { useEffect, useState } from "react";
import { Button, Dropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const UserSideBar = () => {
  const [showNavs, setShowNavs] = useState(false);
  const navigate= useNavigate();
  const [dropdownStates, setDropdownStates] = useState([
    { id: 0, name: "Wardrobe", isOpen: false },
    { id: 1, name: "notification", isOpen: false },
    { id: 2, name: "profile", isOpen: false },
  ]);
  let timeoutId;

  const Logout=()=>{
    localStorage.clear();
    navigate("/");
  }
  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // Check the window width and set the state accordingly
      if (window.innerWidth > 991) setShowNavs(true);
      else setShowNavs(false);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    console.log("enter  ", dropdownStates);
    clearTimeout(timeoutId);
    setDropdownStates((prevStates) => {
      const newState = [...prevStates];
      newState[index].isOpen = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    console.log("leave  ", dropdownStates);
    timeoutId = setTimeout(() => {
      setDropdownStates((prevStates) => {
        const newState = [...prevStates];
        newState[index].isOpen = false;
        return newState;
      });
    }, 200); // Set the desired time duration in milliseconds (e.g., 500ms)
  };
  console.log("check  ", dropdownStates);
  return (
    <>
      <div className="UserSidebar">
        <Navbar>
          <ul className="p-0 m-0 d-flex align-items-center flex-row flex-lg-column gap-lg-4 gap-3">
            <li className="firstUr">
              <Link to="#" className="me-0">
                <img src="/images/white-star-Group.svg" alt="icon" />
              </Link>
            </li>
            <div className="innerOrder d-flex flex-row flex-lg-column align-items-center align-items-lg-start gap-lg-4 gap-3">
              <li className="active" onClick={() => setShowNavs(false)}>
                <Link to="/homepage">
                  <img
                    className="sideBarIcon active"
                    src="/images/noun-home.svg"
                    alt="home"
                  />

                  <span className="prnName ">Home</span>
                </Link>
              </li>
              {showNavs !== true && (
                <Button
                  className="bg-transparent border-0 d-lg-none"
                  onClick={() => setShowNavs(true)}
                >
                  <img src="/images/right-arrow-Icon.svg" alt="Icon" />
                </Button>
              )}
              {showNavs && (
                <>
                  <li>
                    <Link to="#">
                      <Dropdown
                        className="showDtl"
                        show={dropdownStates[0].isOpen}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave(0)}
                      >
                        <Dropdown.Toggle id="dropdown-basic">
                          <img
                            className="sideBarIcon"
                            src="/images/noun-wardrobe.svg"
                            alt="home"
                          />
                          <span className="sameStl ">My Wardrobes</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <p className="whoDay">Today</p>
                          <Dropdown.Item href="#/action-1">
                            Wardrobe 1
                          </Dropdown.Item>
                          <p className="whoDay">Yesterday</p>
                          <div className="wrdpss">
                            <Dropdown.Item >
                              <Link to = '/wardroberesults'> 
                              Wardrobe 1
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item href="/action-3">
                              Wardrobe 2
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              Wardrobe 3
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Link>
                  </li>
                  <li>
                    <Link to="/favourite">
                      <img
                        className="sideBarIcon"
                        src="/images/Generic-heart.svg"
                        alt="favrt"
                      />
                      <span className="sameStl ">Favorites</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <Dropdown
                        className="showDtl Notification position-relative"
                        show={dropdownStates[1].isOpen}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave(1)}
                      >
                        <Dropdown.Toggle id="dropdown-basic">
                          <img
                            className="sideBarIcon"
                            src="/images/noun-bell.svg"
                            alt="home"
                          />
                          <span className="sameStl ">Notifications</span>
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
                      className="sideBarIcon"
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
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
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
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
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
                                  <strong className="NftNmbr">
                                    Wardrobe 1
                                  </strong>{" "}
                                  has 4 new items you would like
                                </span>
                              </div>
                              <h4 className="tagNft">New</h4>
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Link>
                  </li>
                </>
              )}
            </div>
            <li>
              <Link to="#" className="userPrf">
                <Dropdown
                  className="showDtl mainProfile"
                  show={dropdownStates[2].isOpen}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={() => handleMouseLeave(2)}
                >
                  <Dropdown.Toggle id="dropdown-basic">
                    <img
                      src="/images/sidebr-prf-image.png"
                      alt="Profile Icon"
                    />
                    <span className="prnName fw-bold ">Nick Anderson</span>
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
                      <Button className="btn-sm btn-light" onClick ={Logout}>
                      Sign Out
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </>
  );
};

export default UserSideBar;
