import React, { useState } from "react";
import { Button, Dropdown, FormCheck } from "react-bootstrap";
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

const WardrobeOneResult = () => {
  const [modalOverViewShow, setModalOverViewShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const [showToast, setShowToast] = useState(false);
  const [modalRegenrateShow, setModalRegenrateShow] = React.useState(false);

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
          <div className="d-flex justify-content-between align-items-cemter mb-3">
            <p className="yur">10 Products</p>
            <div>
              <Button className="btnRemoveEvry" onClick={handleButtonClick}>
                <img
                  className="me-2"
                  src="/images/remove-icon.svg"
                  alt="icon"
                />
                Delete
              </Button>
              <SuccessfullyRmvPrdct
                showToast={showToast}
                onClose={handleCloseToast}
              />
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
                </div>
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
                  <FormCheck className="wrdbCheck" aria-label="option 1" />
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

export default WardrobeOneResult;
