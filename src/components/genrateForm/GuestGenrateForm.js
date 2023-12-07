import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import GenratedImageAccordion from "../Accordions/GenratedImageAccordion";
import GenrateSocialAccordion from "../Accordions/GenrateSocialAccordion";
import GentratePreferences from "../Accordions/GentratePreferences";

const GuestGenrateForm = () => {
  return (
    <>
      <div className="guestgenrete-Form">
        <div className="poopOverinfo text-end mb-2">
          {["top"].map((placement) => (
            <OverlayTrigger
              trigger="click"
              key={placement}
              placement={placement}
              overlay={
                <Popover id={`popover-positioned-${"top"}`}>
                  <Popover.Body>
                    <img
                      className="text-end"
                      src="/images/question-mark-Icon.svg"
                      alt="icon"
                    />
                    <p>Total of 20 products will be generated</p>
                  </Popover.Body>
                </Popover>
              }
            >
              <Button>
                {" "}
                <img
                  className="text-end"
                  src="/images/question-mark-Icon.svg"
                  alt="icon"
                />
              </Button>
            </OverlayTrigger>
          ))}
        </div>
        <GenratedImageAccordion />
        <GenrateSocialAccordion />
        <GentratePreferences />
      </div>
    </>
  );
};

export default GuestGenrateForm;
