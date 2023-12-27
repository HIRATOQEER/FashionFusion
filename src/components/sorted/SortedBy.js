import React from "react";
import DeletionModal from "../Modals/DeletionModal";
import { Button } from "react-bootstrap";

const SortedBy = () => {
  const [modalDeletionShow, setModalDeletionShow] = React.useState(false);

  return (
    <>
      <div className="sortedBy d-flex align-items-center justify-content-between my-4">
        <div className="d-flex align-items-center">
          <p>Last created</p>
          <hr className="verticalLine" />
          <Button className="btnrgtn">
            Sorted by <img src="/images/dropdown-arrow-Icon.svg" alt="arrow" />
          </Button>
        </div>
        <div>
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
