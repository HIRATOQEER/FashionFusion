import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Col, Row } from "react-bootstrap";

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
        <div className="container">
          <Row className="category ">
            <Col lg={6}>
              <div className="firstSlide">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  loop={true}
                  speed={5}
                  modules={[EffectFade, Autoplay]}
                  fadeEffect={{ crossFade: true }}
                  autoplay={{
                    delay: 1000,
                  }}
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
                  <SwiperSlide>
                    <div className="text-center">
                      <img src="/images/choose1.png" alt="imge" />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col >
            <Col lg={6}>
              <div className="SecondSlide">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={4}
                  slidesPerGroup={4}
                  loop={true}
                  speed={5}
                  modules={[EffectFade, Autoplay]}
                  fadeEffect={{ crossFade: true }}
                  autoplay={{
                    delay: 1000,
                  }}
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
                  <SwiperSlide>
                    <div className="text-center">
                      <img src="/images/choose1.png" alt="imge" />
                      <p>Jeans</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ChooseCategory;
