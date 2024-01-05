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

const WardrobeOneResult = () => {
  const [modalOverViewShow, setModalOverViewShow] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);
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
          <div className="d-flex justify-content-between align-items-cemter mb-3">
            <p className="yur">10 Products</p>
            <Button className="btnRemoveEvry">
              <img className="me-2" src="/images/remove-icon.svg" alt="icon" />
              Delete
            </Button>
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

          <div className="justify-content-between align-items-center mt-4 ">
            <div className="d-flex flex-you justify-content-between">
              <p className="gnrtDiscrptn">
                <img
                  className="me-2"
                  src="/images/question-mark-Icon.svg"
                  alt="icon"
                />
                Update or Regenerate your wardrobe
              </p>
              <Button className="saveWrdrb" onClick={handleButtonClick}>
                Update
              </Button>
            </div>
            <SuccessfullyRmvPrdct
              showToast={showToast}
              onClose={handleCloseToast}
            />

            <Button className="regenrete" onClick={() => setModalShow(true)}>
              <img src="/images/refresh-Icon.svg" alt="icon" /> Regenerate
            </Button>

            <RegenerateModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
      <div></div>
      <Button className="btnPrimary mx-auto mt-5 mb-3">
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
      </Button>
    </>
  );
};

export default WardrobeOneResult;
