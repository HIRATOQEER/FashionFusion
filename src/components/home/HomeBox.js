import React from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";

const HomeBox = () => {
  return (
    <>
      <div className="HomeBox">
        <div className="gif-image">
          <img src="/images/Home-screen.gif" alt="Gif Image" />
        </div>
        <div className="sortedBy d-flex align-items-center mb-4">
          <p>Last created</p>
          <hr className="verticalLine" />
          <Button className="btnrgtn">
            Sorted by <img src="/images/dropdown-arrow-Icon.svg" alt="arrow" />
          </Button>
        </div>
        <div className="MainCardBox">
          <Row className="g-3 me-0">
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  {/* <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
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
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
                  </Button>
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
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
                  </Button>
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
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
                  </Button>
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
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
                  </Button>
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
            <Col xs={12} md={6} lg={3}>
              <div className="HomeCard">
                <Row className="g-1 mb-4">
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-2.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-3.png"
                      alt="product"
                    />
                  </Col>
                  <Col md={4}>
                    <img
                      className="SmlProduct"
                      src="/images/home-card-img-1.png"
                      alt="product"
                    />
                  </Col>
                </Row>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="WrdbNmbr">Black Wardrobe 1</p>
                  <Button className="btnSimple">
                    <img src="/images/three-Icon.svg" alt="three doit" />
                  </Button>
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
        <Button className="btnFeedBack">
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
      </div>
    </>
  );
};

export default HomeBox;
