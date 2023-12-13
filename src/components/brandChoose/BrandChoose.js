import React from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const BrandChoose = () => {
  const settings = {
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false
  };

  return (
    <>
      <div className="brandChoose text-center">
        <h2>
          Brands
          <span> Choose any one</span>
        </h2>
        <div className="Choose">
          <div className="marquee-container">
            <Slider {...settings}>
              <div className="marquee-item">
                <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
              </div>
              <div className="marquee-item">
                <img src="/images/dinerlogo.svg" alt="Brand logo" /></div>
              <div className="marquee-item">
                <img src="/images/levislogo.svg" alt="Brand logo" />
              </div>
              <div className="marquee-item">
                <img src="/images/furorlogo.svg" alt="Brand logo" />
              </div>

              <div className="marquee-item">
                <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
              </div>
              <div className="marquee-item"> <img src="/images/dinerlogo.svg" alt="Brand logo" />
              </div>
              <div className="marquee-item">
                <img src="/images/levislogo.svg" alt="Brand logo" />
              </div>
              <div className="marquee-item">
                <img src="/images/furorlogo.svg" alt="Brand logo" />
              </div>
            </Slider>
          </div>
          {/* <Swiper
            spaceBetween={20}
            speed={5000}
            modules={[Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 1,
            }}
            loop={true}
            slidesPerView={'auto'}
            allowTouchMove={false}
            disableOnInteraction={false}

          >
            <SwiperSlide>
              <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/dinerlogo.svg" alt="Brand logo" />
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <img src="/images/levislogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/furorlogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/images/dinerlogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/levislogo.svg" alt="Brand logo" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src="/images/furorlogo.svg" alt="Brand logo" />
            </SwiperSlide>
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default BrandChoose;
