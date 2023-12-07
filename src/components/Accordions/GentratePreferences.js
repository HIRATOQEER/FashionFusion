import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const GentratePreferences = () => {
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
      <Card className="preferencesGenrat">
        <Card.Header className="d-flex align-items-start justify-content-between">
          <div>
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
            <p className="acnumber mx-2">
              <span>15</span>
              <span>/20</span>
            </p>
            <CustomToggle eventKey="0">
              <img src="/images/downarrow.svg" alt="icon" />
            </CustomToggle>
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
                      <img src="/images/downarrow.svg" alt="icon" />
                    </CustomToggle>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="nested-0">
                  <Card.Body>
                    <div className="Gender">
                      <strong>Gender</strong>
                      <div className="d-flex align-items-center gap-3">
                        <Button className="active">MALE</Button>
                        <Button>FEMAILE</Button>
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default GentratePreferences;
