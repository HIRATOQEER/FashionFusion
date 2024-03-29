import React, { useState, useEffect } from "react";
import { Button, FormCheck } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import BasedUponPrfrnc from "../guestGenratedResult.js/BasedUponPrfrnc";
import SuccessfullyRmvPrdct from "../Toasts/SuccessfullyRmvPrdct";
import ProductOverview from "../Modals/ProductOverview"; // Import ProductOverview component
import RegenerateModal from "../Modals/RegenerateModal";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import SaveWardrobe from "../../services/saveWardrobe";
import SavedBasedUponPrfrnc from "./savedbasedpref";

const WardrobeOneResult = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const location = useLocation();
  const { wardrobeId } = useParams();
  const accessToken = useSelector(state => state.name);
  const [wardrobes, setWardrobe] = useState({ products: [] }); // Initialize with an empty products array
  const [modalRegenrateShow, setModalRegenrateShow] = useState(false);

  const userId = "user123";
  const [showModal, setShowModal] = React.useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const fetchWardrobe = async () => {
      try {
        const data = await SaveWardrobe.getSaveWardrobeById(accessToken, wardrobeId, userId);
        console.log("wardrobedata1mmmmm", data);
        setWardrobe(data); // Update state with fetched wardrobe products data
      } catch (error) {
        console.error("Error fetching wardrobe products:", error);
        // Handle error or set an error state
      }
    };

    fetchWardrobe();
  }, [userId, accessToken, wardrobeId]);

  const handleProductSelect = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleCheckboxChange = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleDeleteSelectedProducts = () => {
    const updatedProducts = wardrobes.products.filter(
      (product) => !selectedProducts.includes(product._id)
    );
    console.log("Updated Products after deletion:", updatedProducts);
    setSelectedProducts([]); // Clear selected products after deletion
  };

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log("Button clicked");
  };

  const handleChange = () => {
    navigate("/createwardrobe");
  };

  return (
    <>
    <SavedBasedUponPrfrnc
        uploadedImage={wardrobes.upload_images_arr}
        manualPreferences={wardrobes.manual_preferences}
        mediaLinks={wardrobes.media_links}
    />
    <div className="yourWardrobe">
        <div className="youWrdrbInner">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <Button className="btnRemoveEvry" onClick={handleDeleteSelectedProducts}>
                <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
                Delete
              </Button>
              <SuccessfullyRmvPrdct />
            </div>
          </div>
          <div className="prfrncResult">
            <Swiper
              navigation={true}
              direction="horizontal"
              slidesPerView={4}
              grid={{
                rows: 2,
                fill: "row",
              }}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiperRst"
            >
              {wardrobes.products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="prfrncResultShow">
                    <FormCheck
                      className={`wrdbCheck ${selectedProducts.includes(product._id) ? "isChecked" : ""}`}
                      aria-label="option 1"
                      onChange={() => handleProductSelect(product._id)}
                      checked={selectedProducts.includes(product._id)}
                    />
                    <Button className="resultImg" onClick={() => handleProductSelect(product._id)}>
                      <img className="productImg" src={product.image[0]} alt="picture" />
                    </Button>
                    {/* Display ProductOverview modal on button click */}
                    <ProductOverview product={product} show={selectedProducts.includes(product._id)} onHide={() => {}} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="d-flex justify-content-between align-items-center flex-column flex-xl-row mt-4">
            <div className="d-flex align-items-center flex-column flex-lg-row mb-3 mb-xl-0">
              <span className="d-block">
                <img src="/images/question-mark-Icon.svg" alt="icon" />
              </span>
              <p className="gnrtDiscrptn text-center text-lg-start">
                Update or Regenerate your wardrobe
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button className="saveWrdrb" onClick={handleButtonClick}>
                Update Changes
              </Button>
              <Button className="regenrete" onClick={() => setModalRegenrateShow(true)}>
                Regenerate
              </Button>
              <RegenerateModal show={modalRegenrateShow} onHide={() => setModalRegenrateShow(false)} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SuccessfullySavedToast />
      </div>
      <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
        Generate the magic
      </Button>
    </>
  );
};

export default WardrobeOneResult;
