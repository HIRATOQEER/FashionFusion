import React from "react";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";

const GenratedImageAccordion = () => {
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
      <Card className="imageGenrat">
        <Card.Header className="d-flex align-items-start justify-content-between">
          <div>
            <span className="gnrspan">
              <img className="me-2" src="/images/picture-Icon.svg" alt="icon" />
              Generate by image
            </span>
            <p>Upload your images below to generate wardrobes </p>
          </div>
          <div className="d-flex align-items-center">
            <span className="tagg">
              <img src="/images/up-img-Icon.svg" alt="icon" />2 images
            </span>
            <CustomToggle eventKey="0" as={Button}>
              <img src="/images/downarrow.svg" alt="icon" />
            </CustomToggle>
          </div>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <div className="d-flex justify-content-center">
              <Button className="btUploadImg">
                <img src="/images/picture-outline-Icon.svg" alt="icon" />
                <p>Browse or drag and drop any image to upload </p>
              </Button>
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default GenratedImageAccordion;
