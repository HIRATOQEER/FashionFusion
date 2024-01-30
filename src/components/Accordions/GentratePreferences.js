import React from "react";
import {
  Button,
  Col,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { useNavigate } from "react-router-dom"; // Add this line
const GentratePreferences = (event) => {


  const navigate = useNavigate();
  const handleChange = ()=>{
    navigate("/guestresult");
  }

  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log("totally custom!")
    );

 
    return (
      <button
        type="button"
        style={{ backgroundColor: "pink" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };

  // State to track the selected color
  const [selectedColor, setSelectedColor] = useState(null);

  // Array of available colors
  const colors = [
    "#FF0000",
    "#0623BF",
    "#52FF00",
    "#FFD600",
    "#00FFD1",
    "#AD00FF",
  ];

  // Function to handle color click
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  return (
    <>
      <Accordion defaultActiveKey="0">
        <Card className="preferencesGenrat">
          <Card.Header className="d-md-flex align-items-start justify-content-between">
            <div className="mb-3 mb-md-0">
              <span className="gnrspan">
                <img className="me-2" src="/images/card-Icon.svg" alt="icon" />
                Generate by your Custom Preferences
              </span>
              <p className="prvd">
                Provide your preferences manually to generate wardrobes
              </p>
            </div>
            <div className="d-flex align-items-center">
              <span className="tagg">
                <img src="/images/card-whiteIcon.svg" alt="icon" />2 Preferences
              </span>
              <p className="acnumber mx-2 d-none d-md-block">
                <span>15</span>
                <span>/20</span>
              </p>
              <div className="d-none d-md-block">
                <CustomToggle eventKey="0" as={Button}>
                  <img
                    className="arrowSvg"
                    src="/images/downarrow.svg"
                    alt="icon"
                  />
                </CustomToggle>
              </div>
            </div>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <div className="Gender mb-4">
                <strong>Gender</strong>
                <div className="d-flex align-items-center gap-3">
                  <Button className="active">MALE</Button>
                  <Button>FEMAILE</Button>
                </div>
              </div>
              <Accordion defaultActiveKey="nested-0" className="prfrnceNested">
                <Card className="preferencesGenrat">
                  <Card.Header className="d-flex align-items-start justify-content-between">
                    <div>
                      <span className="gnrspan">Preference 1</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button className="btnRemove">Remove</Button>
                      <CustomToggle eventKey="nested-0" as={Button}>
                        <img
                          className="arrowSvg"
                          src="/images/downarrow.svg"
                          alt="icon"
                        />{" "}
                      </CustomToggle>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse eventKey="nested-0">
                    <Card.Body className="nestedAcrdn">
                      <Row className="p-3">
                        <Col md={6} xs={12} className="ps-md-0">
                          <Form.Label>Category</Form.Label>
                          <InputGroup className="mb-3">
                            <Button className="searchIcon">
                              <img src="/images/search-Icon.svg" alt="icon" />
                            </Button>

                            <Form.Control
                              className="searchInput"
                              aria-label="Example text with two button addons"
                              placeholder="Search Category"
                            />
                            <Button className="srchClr">Clear</Button>
                          </InputGroup>
                        </Col>
                        <Col md={6} xs={12} className="pe-md-0">
                          <Form.Label>Brand</Form.Label>
                          <InputGroup>
                            <Button className="searchIcon">
                              <img src="/images/search-Icon.svg" alt="icon" />
                            </Button>

                            <Form.Control
                              className="searchInput"
                              aria-label="Example text with two button addons"
                              placeholder="Furor"
                            />
                            <Button className="srchClr">Clear</Button>
                          </InputGroup>
                        </Col>
                        <Col md={6} xs={12} className="order-1 order-md-0">
                          <Row>
                            <Col md={6}>
                              <div>
                                <Form.Label>Price</Form.Label>
                                <MultiRangeSlider
                                  min={0}
                                  style={{
                                    border: "none",
                                    boxShadow: "none",
                                    padding: "15px 10px",
                                  }}
                                  label="false"
                                  ruler="false"
                                  max={100}
                                  step={5}
                                  minValue={minValue}
                                  maxValue={maxValue}
                                  onInput={(e) => {
                                    handleInput(e);
                                  }}
                                />
                              </div>
                            </Col>
                            <Col md={6}>
                              <div className="colorPickr">
                                <Form.Label>Color</Form.Label>
                                <div style={{ display: "flex" }}>
                                  {/* Map through the colors and create color boxes */}
                                  {colors.map((color) => (
                                    <div
                                      key={color}
                                      onClick={() => handleColorClick(color)}
                                      style={{
                                        width: "10%",
                                        // height: "10%",
                                        borderRadius: "100%",
                                        backgroundColor: color,
                                        margin: "5px",
                                        cursor: "pointer",
                                      }}
                                    ></div>
                                  ))}
                                  <img
                                    style={{
                                      width: "10%",
                                      height: "10%",
                                      borderRadius: "100%",

                                      margin: "5px",
                                      cursor: "pointer",
                                    }}
                                    src="/images/multicolor.svg"
                                    alt="color"
                                  />
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col md={6} xs={12}>
                          <Row>
                            <Col md={6}>
                              <Form.Label>Size</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  className="selectSize"
                                  aria-label="Text input with dropdown button"
                                  placeholder="Select size"
                                />

                                <DropdownButton
                                  className="slctSize"
                                  title={
                                    <span>
                                      <img
                                        src="/images/dropdown-arrow-Icon.svg"
                                        alt="SVG Image"
                                        width="20"
                                        height="20"
                                      />
                                    </span>
                                  }
                                  id="input-group-dropdown-2"
                                  align="end"
                                >
                                  <Dropdown.Item href="#">Small</Dropdown.Item>
                                  <Dropdown.Item href="#">Medium</Dropdown.Item>
                                  <Dropdown.Item href="#">Large</Dropdown.Item>
                                  <Dropdown.Item href="#">Xl</Dropdown.Item>
                                </DropdownButton>
                              </InputGroup>
                            </Col>
                            <Col md={6}>
                              <Form.Label>Quantity</Form.Label>
                              <InputGroup>
                                <Form.Control
                                  className="selectSize"
                                  aria-label="Text input with dropdown button"
                                  placeholder="Select size"
                                />

                                <DropdownButton
                                  className="slctSize"
                                  title={
                                    <span>
                                      <img
                                        src="/images/dropdown-arrow-Icon.svg"
                                        alt="SVG Image"
                                        width="20"
                                        height="20"
                                      />
                                    </span>
                                  }
                                  id="input-group-dropdown-2"
                                  align="end"
                                >
                                  <Dropdown.Item href="#">01</Dropdown.Item>
                                  <Dropdown.Item href="#">10</Dropdown.Item>
                                  <Dropdown.Item href="#">20</Dropdown.Item>
                                  <Dropdown.Item href="#">30</Dropdown.Item>
                                </DropdownButton>
                              </InputGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <Button className="addPerafrence">
                <img src="/images/plus-Icon.svg" alt="plus" /> Add{" "}
              </Button>
            </Card.Body>
          </Accordion.Collapse>
          <div className="card-header d-flex justify-content-center d-md-none ">
            <CustomToggle eventKey="0" as={Button}>
              <img
                className="arrowSvg"
                src="/images/downarrow.svg"
                alt="icon"
              />
            </CustomToggle>
          </div>
        </Card>
      </Accordion>
      
    
           
           
       
      <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default GentratePreferences;
