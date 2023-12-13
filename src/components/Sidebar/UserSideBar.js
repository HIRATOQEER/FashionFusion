import React from "react";
import { Dropdown } from "react-bootstrap";

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
                    <Dropdown.Item href="#/action-2">Wardrobe 1</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Wardrobe 2</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Wardrobe 3</Dropdown.Item>
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
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </a>
            </li>
          </div>
          <li>
            <a href="#" className="userPrf">
              <img src="/images/sidebr-prf-image.png" alt="Profile Icon" />
              <span className="prnName fw-bold">Nick Anderson</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserSideBar;
