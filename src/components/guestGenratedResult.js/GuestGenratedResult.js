import React, { useState } from "react";
import BasedUponPrfrnc from "./BasedUponPrfrnc";

import { Button, Dropdown } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import ProductDtails from "../Modals/ProductDtails";
import SuccessfullyToast from "../Toasts/SuccessfullySvedToast";
import SuccessfullySavedToast from "../Toasts/SuccessfullySvedToast";

const GuestGenratedResult = () => {
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
              spaceBetween={10}
              modules={[Grid, Navigation]}
              className="mySwiperRst"
            >
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
                <ProductDtails
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
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

          <div className="justify-content-between align-items-center mt-4 ">
            <p className="gnrtDiscrptn">
              <img src="/images/question-mark-Icon.svg" alt="icon" />
              You can save this wardrobe as it is or you can regenerate for some
              new results
            </p>
            {/* <div>
              <Button className="saveWrdrb" onClick={handleButtonClick}>
                Save Wardrobe
              </Button>

              <SuccessfullySavedToast
                showToast={showToast}
                onClose={handleCloseToast}
              />
            </div> */}

            <Dropdown className="viewReslt">
              <Dropdown.Toggle id="dropdown-basic" className="regenrete">
                <img src="/images/refresh-Icon.svg" alt="icon" /> Regenerate
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="d-flex justify-content-between align-items-center px-3 pt-2">
                  <p className="rmvPrdct">Regenerate</p>
                  <Button className="btnCloseDrp">
                    <img src="/images/close-Icon.svg" alt="icon" />
                  </Button>
                </div>
                <hr />
                <div className="p-3">
                  <p className="tellResn">Tell us the reason (Optional)</p>
                  <textarea
                    className="addTxtCmnt mb-3 w-full d-block"
                    name=""
                    id=""
                    cols="30"
                    rows="1"
                    placeholder="Comment"
                  ></textarea>
                  <div className="d-flex justify-content-end align-items-center gap-3">
                    <Button className="btnrgtn">Cancel</Button>
                    <Button className="btnPrfSubmit">Submit</Button>
                  </div>{" "}
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>

      <Button className="btnPrimary mx-auto mt-5 mb-3">
        <img className="me-3" src="/images/staricon.svg" alt="star" /> Generate
        the magic
        <div>
          <Button className="saveWrdrb" onClick={handleButtonClick}>
            Save Wardrobe
          </Button>

          <SuccessfullySavedToast
            showToast={showToast}
            onClose={handleCloseToast}
          />
        </div>
      </Button>
    </>
  );
};

export default GuestGenratedResult;
