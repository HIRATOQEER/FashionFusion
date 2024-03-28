
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
import ProductOverview from "../Modals/ProductOverview";
import RegenerateModal from "../Modals/RegenerateModal";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const WardrobeOneResult = () => {
  const [modalOverViewShow, setModalOverViewShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [showToast, setShowToast] = useState(false);
  const [modalRegenrateShow, setModalRegenrateShow] = React.useState(false);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const location = useLocation();
  
  const { dataToSend } = location.state || {};
  
  useEffect(() => {
    // Check if dataToSend is properly received
    if (!dataToSend) {
      console.error("No data received in WardrobeOneResult component");
      // Optionally, redirect or handle the absence of data
    } else {
      console.log("Data received:", dataToSend);
    }
  }, [dataToSend]);

 // Array of 10 products with dummy data
 const [products, setProducts] = useState(
  Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    image: "/images/given-prefrnce-image-1.png", // Placeholder image URL
  }))
);

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
  const updatedProducts = products.filter(
    (product) => !selectedProducts.includes(product.id)
  );
  setProducts(updatedProducts);
  setShowToast(true);
  setSelectedProducts([]); // Clear selected products after deletion
};

  const handleUpdateChanges = () => {
    // Update changes logic here
    console.log("Updating changes for selected products:", selectedProducts);
  };

  const handleRegenerate = () => {
    // Regenerate logic here
    console.log("Regenerating wardrobe");
  };

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  const handleChange = () => {
    navigate("/createwardrobe");
  };

  return (
    <>
    <BasedUponPrfrnc data={dataToSend} />
    <div className="yourWardrobe">
        <div className="youWrdrbInner">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="yur">{products.length} Products</p>
            <div>
              <Button className="btnRemoveEvry" onClick={handleDeleteSelectedProducts}>
                <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
                Delete
              </Button>
              <SuccessfullyRmvPrdct showToast={showToast} onClose={() => setShowToast(false)} />
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
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  rows: 2,
                },
                480: {
                  slidesPerView: 2,
                  rows: 2,
                },
                576: {
                  slidesPerView: 2,
                  rows: 2,
                },
                640: {
                  slidesPerView: 2,
                  rows: 2,
                },
                768: {
                  slidesPerView: 2,
                  rows: 2,
                },
                991: {
                  slidesPerView: 3,
                  rows: 2,
                },
                1200: {
                  slidesPerView: 4,
                  rows: 2,
                },
              }}
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiperRst"
            >
     {products.map((product) => (
      
  <SwiperSlide key={product.id}>
    <div className="prfrncResultShow">
    <FormCheck
                      className={`wrdbCheck ${selectedProducts.includes(product.id) ? "isChecked" : ""}`}
                      aria-label="option 1"
                      onChange={() => handleCheckboxChange(product.id)}
                      checked={selectedProducts.includes(product.id)}
                    />
      <Button className="resultImg" onClick={() => handleProductSelect(product.id)}>
        <img className="productImg" src={product.image} alt="picture" />
      </Button>
      <ProductOverview
        show={product.isModalOpen}
        onHide={() => {
          const updatedProducts = products.map(p =>
            p.id === product.id ? { ...p, isModalOpen: false } : p
          );
          setProducts(updatedProducts);
        }}
      />
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
              <Button
                className="regenrete"
                onClick={() => setModalRegenrateShow(true)}
              >
                <img src="/images/refresh-Icon.svg" alt="icon" /> Regenerate
              </Button>
              <RegenerateModal
                show={modalRegenrateShow}
                onHide={() => setModalRegenrateShow(false)}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <SuccessfullySavedToast
          showToast={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
      <Button className="btnPrimary mx-auto mt-5 mb-3" onClick={handleChange}>
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};
export default WardrobeOneResult;