import React from "react";
import { Button, Col, FormControl, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const GenrateSocialAccordion = () => {
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

  return (
    <Accordion defaultActiveKey="0">
      <Card className="socialGenrat">
        <Card.Header className="d-flex align-items-start justify-content-between">
          <div>
            <span className="gnrspan">
              <img className="me-2" src="/images/link-Icon.svg" alt="icon" />
              Generate by Social Media Posts
            </span>
            <p>
              Provide your Instagram or Facebook Profile Link to generate
              wardrobes
            </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="tagg">
              <img src="/images/links-white-Icon.svg" alt="icon" />
              Links
            </span>
            <CustomToggle eventKey="0" as={Button}>
              <img src="/images/downarrow.svg" alt="icon" />
            </CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <Row>
              <Col className="position-relative">
                <FormControl type="text" placeholder="Facebook link" />
                <img
                  className="inptlogo"
                  src="/images/fcbIcon.svg"
                  alt="facebook icon"
                />
              </Col>
              <Col className="position-relative">
                <FormControl type="text" placeholder="Instagram link" />
                <img
                  className="inptlogo"
                  src="/images/insta-Icon.svg"
                  alt="facebook icon"
                />
              </Col>
            </Row>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default GenrateSocialAccordion;
