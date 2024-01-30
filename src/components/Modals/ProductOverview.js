import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { FreeMode, Pagination } from "swiper/modules";
import AddProduct from "../Modals/AddProduct";

const ProductOverview = (props) => {
  const [modalAddShow, setModalAddShow] = React.useState(false);

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="productDtlMdl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
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
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="OverView py-5"
            >
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-1.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-2.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-3.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-1.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-2.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-3.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-1.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-2.png"
                  alt="product"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-100"
                  src="/images/overview-3.png"
                  alt="product"
                />
              </SwiperSlide>
              <AddProduct
                  show={modalAddShow}
                  onHide={() => setModalAddShow(false)}
                />
            </Swiper>
          </div>
          <p className="dtlThisPrdt">SMART FIT POLO SHIRT - FMTCP23-067</p>
          <div className="d-flex justify-content-between align-items-center">
            <p className="priceThis">PKR 1,395</p>
            <img className="BrandThis" src="/images/furorlogo.svg" alt="icon" />
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button className="cancelPrv py-1"   onClick={() => setModalAddShow(true)}>
            <img
              className="me-1"
              src="/images/heart-outline-Icon.svg"
              alt="icon"
            />
            Add to Favorites
          </Button>
          <Button className="btnPrfSubmit py-1">
            BUY NOW <img src="/images/buynow-Icon.svg" alt="icon" />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductOverview;
