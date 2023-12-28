import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { Button, Col, Row } from "react-bootstrap";
import { RatingStar } from "../Rating/RatingStar";
import FeedbackModal from "../Modals/FeedbackModal";

const FavoriteProductCard = () => {
  return (
    <>
      <div className="favoritsProducts">
        <Row>
          <Col xs={12} md={5}>
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="FavoritProductSwiper"
            >
              <SwiperSlide>
                <img src="/images/favorite-product-1.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/favorite-product-2.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/favorite-product-1.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/favorite-product-1.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/favorite-product-2.png" alt="product" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/favorite-product-1.png" alt="product" />
              </SwiperSlide>
            </Swiper>
          </Col>
          <Col xs={12} md={7}>
            <div className="detailBox">
              <p className="prdctName mb-3">
                SMART FIT POLO SHIRT - FMTCP23-067
              </p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="priceThis">PKR 1,395</p>
                <img
                  className="BrandThis"
                  src="/images/furorlogo.svg"
                  alt="icon"
                />
              </div>
              <strong>Your Comments</strong>
              <p className="yourCommentDtl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                nemo nesciunt provident molestias dolore velit? Odit optio
                voluptate reprehenderit nulla obcaecati aut tempore! Alias
                adipisci ea distinctio, rem autem suscipit!
              </p>
              <div className="d-flex align-items-center mb-3">
                <RatingStar />
              </div>
              <div className="d-flex align-items-center mb-3">
                <Button className="buyProduct">
                  BUY NOW <img src="/images/buynow-Icon.svg" alt="icon" />
                </Button>
                <Button className="btnRemoveEvry border-0 ms-3">
                  <img src="images/remove-icon.svg" alt="icon" />
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FavoriteProductCard;
