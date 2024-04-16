import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import { Button, Col, Row } from "react-bootstrap";
import { RatingStar } from "../Rating/RatingStar";

import { useSelector } from "react-redux";
import favouriteProductSvc from '../../services/favouriteProduct'

const FavoriteProductCard = ({ product ,onDelete}) => {
  const {
   product_id,
    brand_name,
    brand_logo,
    product_name,
    price,
    images_arr,
    comment,
    rating,
    reason,
    // Assuming product ID is provided as _id
  } = product;

  const handleDeleteClick = () => {
  
    onDelete(product_id); // Pass favProductid to onDelete
  };
  const token = useSelector((state) => state.token); // Assuming state.name returns a Promise
  const userId="user123";
 
  const handleBuyNow = () => {
    // Redirect user to the buy now page or any desired page
    //history.push("/buy-now");
  };
console.log("ImagesArray",images_arr);
  return (
    <>
      <div className="favoritsProducts">
        <Row>
          <Col xs={12} md={5} className="mb-3 mb-md-0">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="FavoritProductSwiper"
            >
              {images_arr.map((image, index) => (
    <SwiperSlide key={index}>
      <img
        src={image}
        alt={`product-${index}`}
        onLoad={() => console.log(`Image ${index} loaded successfully`)}
        onError={(e) => console.error(`Error loading image ${index}:`, e)}
      />
    </SwiperSlide>
  ))}
            </Swiper>
          </Col>
          <Col xs={12} md={7}>
            <div className="detailBox">
              <p className="prdctName mb-3">{product_name}</p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="priceThis">{price}</p>
                <img className="BrandThis" src={brand_logo} alt="brand" />
              </div>
              <strong>Your Comments</strong>
              <p className="yourCommentDtl">{comment}</p>
              <div className="d-flex align-items-center mb-3">
                <RatingStar rating={rating} />
              </div>
              <div className="d-flex align-items-center mb-3">
             

                <Button className="buyProduct">
                  BUY NOW <img src="/images/buynow-Icon.svg" alt="icon" />
                </Button>
                <Button className="btnRemoveEvry border-0 ms-3"  onClick={handleDeleteClick}>
                  <img src="/images/remove-icon.svg" alt="remove" />
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
