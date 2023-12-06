import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const BrandChoose = () => {
  return (
    <>
      <div className="brandChoose text-center">
        <h2>
          Brands
          <span> Choose any one</span>
        </h2>
        <div className="Choose">
          {/* <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
          <img src="/images/dinerlogo.svg" alt="Brand logo" />
          <img src="/images/levislogo.svg" alt="Brand logo" />
          <img src="/images/furorlogo.svg" alt="Brand logo" />
          <img src="/images/sabasafinazlogo.svg" alt="Brand logo" />
          <img src="/images/dinerlogo.svg" alt="Brand logo" /> */}
          <Swiper
            spaceBetween={10}
            slidesPerView={6}
            loop={true}
            modules={[EffectFade, Autoplay]}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 1000,
            }}
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
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BrandChoose;
