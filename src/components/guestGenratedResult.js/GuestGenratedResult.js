import React, { useState } from "react";
import BasedUponPrfrnc from "./BasedUponPrfrnc";

import { Button, Dropdown } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import ProductDtails from "../Modals/ProductDtails";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";
import AddProduct from "../Modals/AddProduct";
import ProductOverview from "../Modals/ProductOverview";
import RegenerateModal from "../Modals/RegenerateModal";

const GuestGenratedResult = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [modalAddShow, setModalAddShow] = React.useState(false);
  const [modalOverViewShow, setModalOverViewShow] = React.useState(false);
  const [modalRegenrateShow, setModalRegenrateShow] = React.useState(false);

  const [showToast, setShowToast] = useState(false);

  const handleButtonClick = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };
  return (
    <>
      <BasedUponPrfrnc />
      <div className="yourWardrobe">
        <div className="youWrdrbInner">
          <h3 className="yur">Your Wardrobe</h3>
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
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalOverViewShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button
                    className="btnRemoveClose"
                    onClick={() => setModalShow(true)}
                  >
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button
                    className="btnFavourite"
                    onClick={() => setModalAddShow(true)}
                  >
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
                <ProductDtails
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
                <AddProduct
                  show={modalAddShow}
                  onHide={() => setModalAddShow(false)}
                />
                <ProductOverview
                  show={modalOverViewShow}
                  onHide={() => setModalOverViewShow(false)}
                />
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button className="resultImg">
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button
                    className="btnRemoveClose"
                    onClick={() => setModalShow(true)}
                  >
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="prfrncResultShow">
                  <Button
                    className="resultImg"
                    onClick={() => setModalShow(true)}
                  >
                    <img
                      className="productImg"
                      src="/images/given-prefrnce-image-1.png"
                      alt="picture"
                    />
                  </Button>
                  <Button className="btnRemoveClose">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                  <Button className="btnFavourite">
                    <img
                      className="me-2"
                      src="/images/fvrt-heart-Icon.svg"
                      alt="icon"
                    />
                    Add to Favorites
                  </Button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="d-flex justify-content-between align-items-center flex-column flex-xl-row mt-4">
            <div className="d-flex align-items-center flex-column flex-lg-row mb-3 mb-xl-0">
              <span className="d-block">
                <img src="/images/question-mark-Icon.svg" alt="icon" />
              </span>

              <p className="gnrtDiscrptn text-center text-lg-start">
                You can save this wardrobe as it is or you can regenerate for
                some new results
              </p>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button className="saveWrdrb" onClick={handleButtonClick}>
                Save Wardrobe
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
          onClose={handleCloseToast}
        />
      </div>
      <Button className="btnPrimary mx-auto mt-5 mb-3">
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default GuestGenratedResult;
