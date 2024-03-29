import React, { useState, useEffect } from "react";
import { Button, Col, Dropdown, Row } from "react-bootstrap";
import FeedbackModal from "../Modals/FeedbackModal";
import SortedBy from "../sorted/SortedBy";
import { Link } from "react-router-dom";
import SaveWardrobe from "../../services/saveWardrobe";
import { useSelector } from "react-redux";

const HomeBox = () => {
  const userId = "user123";
  const token = useSelector((state) => state.name);
  const [modalShow, setModalShow] = useState(false);
  const [wardrobes, setWardrobe] = useState([]);

  useEffect(() => {
    const fetchWardrobe = async () => {
      try {
        const data = await SaveWardrobe.getAllSaveWardrobes(userId, token);
        console.log("wardrobedata", data);
        setWardrobe(data); // Update state with fetched wardrobe products data
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
      }
    };

    fetchWardrobe();
  }, [userId, token]); // Run effect whenever userId or token changes
  const handleRemoveWardrobe = async (wardrobeId) => {
    try {
      await SaveWardrobe.deleteSaveWardrobe(token, wardrobeId, userId);
      // Update state after successful deletion
     
    } catch (error) {
      console.error("Error deleting wardrobe:", error);
    }
  };



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
            {wardrobes.map((wardrobeItem, index) => (
              <Col key={index} xs={12} md={6} xl={3} lg={4}>
                <div className="HomeCard">
                <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
  {/* Render wardrobe images here */}
  {wardrobeItem.products.slice(0, 6).map((product, imgIndex) => (
    <Col key={imgIndex} md={4} className="mblCol">
      <img className="SmlProduct" src={product.image[0]} alt={`product-${imgIndex}`} />
    </Col>
  ))}
</Row>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* Render wardrobe name */}
                    <Link to={`/wardroberesults/${wardrobeItem.wardrobe_id}`}>
                      <p className="WrdbNmbr">{wardrobeItem.name}</p>
                    </Link>
                    {/* Render dropdown */}
                    <Dropdown className="twoOption">
                      <Dropdown.Toggle id={`dropdown-${index}`} className="btnSimple">
                        <img src="/images/three-Icon.svg" alt="three doit" />
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Save Wardrobe</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleRemoveWardrobe(wardrobeItem.wardrobe_id)}>
                       Remove</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {/* Render CreatedTime */}
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
            ))}
          </Row>
        </div>
        <Button className="btnFeedBack" onClick={handleButtonClick}>
          <img src="/images/feedback-Icon.svg" alt="icon" />
          Feedback
        </Button>
        <FeedbackModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </>
  );
};

export default HomeBox;
