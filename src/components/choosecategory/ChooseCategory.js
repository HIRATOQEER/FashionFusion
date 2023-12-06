import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const ChooseCategory = () => {
  return (
    <>
      <div className="ChooseCategory text-center">
        <div className="topdiv">
          <img src="/images/female-product-icon.svg" alt="male" />
          <h2>
            Brands
            <span> Choose any one</span>
          </h2>
          <img src="/images/female-product-icon.svg" alt="male" />
        </div>
        <div className="category">
          <div className="firstSlide">
            {/* <div className="text-center">
              <img src="/images/choose1.png" alt="imge" />
              <p>Jeans</p>
            </div>
            <div className="text-center">
              <img src="/images/choose2.png" alt="imge" />
              <p>T-Shirts</p>
            </div>
            <div className="text-center">
              <img src="/images/choose3.png" alt="imge" />
              <p>Suits</p>
            </div>
            <div className="text-center">
              <img src="/images/choose4.png" alt="imge" />
              <p>Blazers</p>
            </div>
            <div className="text-center">
              <img src="/images/choose1.png" alt="imge" />
              <p>Jeans</p>
            </div>
            <div className="text-center">
              <img src="/images/choose2.png" alt="imge" />
              <p>T-Shirts</p>
            </div> */}
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              loop={true}
              modules={[EffectFade, Autoplay]}
              fadeEffect={{ crossFade: true }}
            >
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose1.png" alt="imge" />
                  <p>Jeans</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose2.png" alt="imge" />
                  <p>T-Shirts</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose3.png" alt="imge" />
                  <p>Suits</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose4.png" alt="imge" />
                  <p>Blazers</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose1.png" alt="imge" />
                  <p>Jeans</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/choose2.png" alt="imge" />
                  <p>T-Shirts</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="text-center">
                  <img src="/images/choose3.png" alt="imge" />
                  <p>Suits</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hrline"></div>
          <div className="SecondSlide">
            {/* <div className="text-center">
              <img src="/images/chossewomen1.png" alt="imge" />
              <p>Casual</p>
            </div>
            <div className="text-center">
              <img src="/images/chossewomen2.png" alt="imge" />
              <p>Luxury</p>
            </div>
            <div className="text-center">
              <img src="/images/chossewomen3.png" alt="imge" />
              <p>Jackets</p>
            </div>
            <div className="text-center">
              <img src="/images/chossewomen4.png" alt="imge" />
              <p>Shorts</p>
            </div>
            <div className="text-center">
              <img src="/images/chossewomen1.png" alt="imge" />
              <p>Casual</p>
            </div>
            <div className="text-center">
              <img src="/images/chossewomen2.png" alt="imge" />
              <p>Luxury</p>
            </div> */}
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              loop={true}
              modules={[EffectFade, Autoplay]}
              fadeEffect={{ crossFade: true }}
            >
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen1.png" alt="imge" />
                  <p>Casual</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen2.png" alt="imge" />
                  <p>Luxury</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen3.png" alt="imge" />
                  <p>Jackets</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen4.png" alt="imge" />
                  <p>Shorts</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen1.png" alt="imge" />
                  <p>Casual</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen2.png" alt="imge" />
                  <p>Luxury</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="text-center">
                  <img src="/images/chossewomen3.png" alt="imge" />
                  <p>Jackets</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseCategory;
