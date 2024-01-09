import React from "react";
import DeletionModal from "../Modals/DeletionModal";
import { Button, Dropdown } from "react-bootstrap";

const SortedBy = () => {
  const [modalDeletionShow, setModalDeletionShow] = React.useState(false);

  return (
    <>
      <div className="sortedBy d-flex align-items-md-center align-items-end justify-content-between my-4">
        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
          <p>Last created</p>
          <hr className="verticalLine d-none d-md-block" />

          <Dropdown className="SortBy">
            <Dropdown.Toggle className="btnrgtn" id="dropdown-basic">
              Sorted by
              <img src="/images/dropdown-arrow-Icon.svg" alt="arrow" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Newest First</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Oldest First</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="">
          <Button
            className="btnRemoveEvry"
            onClick={() => setModalDeletionShow(true)}
          >
            <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
            Remove Everything
          </Button>
          <DeletionModal
            show={modalDeletionShow}
            onHide={() => setModalDeletionShow(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SortedBy;
