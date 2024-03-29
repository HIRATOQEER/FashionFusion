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
        const data = await SaveWardrobe.getAllSaveWardrobes(token);
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
      await SaveWardrobe.deleteSaveWardrobe(token, wardrobeId);
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
          {wardrobes && wardrobes.map((wardrobeItem, index) => (
  <Col key={index} xs={12} md={6} xl={3} lg={4}>
    <div className="HomeCard">
      <Row className="g-1 mb-4 justify-content-center justify-content-md-start">
        {/* Render wardrobe images here */}
        {wardrobeItem.products && Array.isArray(wardrobeItem.products) && wardrobeItem.products.slice(0, 6).map((product, imgIndex) => (
          <Col key={imgIndex} md={4} className="mblCol">
            {product.image && product.image.length > 0 && (
              <img className="SmlProduct" src={product.image[0]} alt={`product-${imgIndex}`} />
            )}
          </Col>
        ))}
      </Row>
      {/* Remaining JSX for the card */}
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
