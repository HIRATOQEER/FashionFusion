import React, { useState } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import FeedbackModal from "../Modals/FeedbackModal";
import SortedBy from "../sorted/SortedBy";
import { Link } from "react-router-dom"; // Add this line
const HomeBox = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleButtonClick = () => {
    setModalShow(!modalShow); // Toggle the modal state
  };

  return (
    <>
    
    
      <div className="HomeBox">
        <div className="gif-image d-none d-lg-block">
          <img src="/images/Home-screen.gif" alt="Gif Image" />
        </div>
        <SortedBy />
        <div className="MainCardBox">
          <Row className="g-3 me-0">
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <Link to="/details">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  </Link>
                  {/* <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button> */}
                  <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button>
                  {/* <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown> */}
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  {/* <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button> */}
                  <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  {/* <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button> */}
                  <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  {/* <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button> */}
                  <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} xl={3} lg={4}>
              <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4} className="mblCol">
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  {/* <Button className="border-0 bg-transparent p-0">
                    <img src="/images/remove-icon.svg" alt="three doit" />
                  </Button> */}
                  <Dropdown className="twoOption">
                    <Dropdown.Toggle id="dropdown-basic" className="btnSimple">
                      <img src="/images/three-Icon.svg" alt="three doit" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Save Wardrobe
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Remove <img src="/images/remove-icon.svg" alt="icon" />
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="CreatedTime d-flex justify-content-between align-items-center">
                  <Button className="BtnTaggCstm">
                    <img src="/images/home-card-Icon.svg" alt="custom" />
                    <span>Custom</span>
                  </Button>

                  <p className="AgaoTime">Created 2 mins ago</p>
                </div>
                <div className="BottomCurveImg">
                  <img src="/images/bottom-bg-img.svg" alt="curve" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Button className="btnFeedBack  " onClick={handleButtonClick}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default HomeBox;
