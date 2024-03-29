import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import AddProduct from "../Modals/AddProduct";

const ProductOverview = ({ product, show, onHide }) => {
  const [modalAddShow, setModalAddShow] = React.useState(false);
  const {
    brand_logo,
    brand_name,
    product_name,
    price,
    image,
    size,
    product_url,
    _id,
  } = product;

  const handleAddToFavorites = () => {
    setModalAddShow(true);
    // Handle adding product to favorites or perform any other action
  };
  const handleClose = () => {
    onHide(); // Call onHide function from props to close the modal
  };

  return (
    <>
     <Modal show={show} onHide={handleClose} size="lg" centered className="productDtlMdl">
  <Modal.Header closeButton>
          <Modal.Title>
            <p className="rmvPrdct">Product Overview</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between align-items-start">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              freeMode={true}
              centeredSlides={true}
              loop={true}
              pagination={{ clickable: true }}
              modules={[FreeMode, Pagination]}
              className="OverView py-5"
            >
              {image.map((imageUrl, index) => (
                <SwiperSlide key={index}>
                  <img className="w-100" src={imageUrl} alt={`product-${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <p className="dtlThisPrdt">{product_name}</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="priceThis">{price}</p>
            <img className="BrandThis" src={brand_logo} alt={brand_name} />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="cancelPrv py-1" onClick={handleAddToFavorites}>
            <img className="me-1" src="/images/heart-outline-Icon.svg" alt="icon" />
            Add to Favorites
          </Button>
          <Button className="btnPrfSubmit py-1" href={product_url} target="_blank">
            BUY NOW <img src="/images/buynow-Icon.svg" alt="icon" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductOverview;
