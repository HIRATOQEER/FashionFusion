import React, { useState } from "react";
import { Form } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const RatingStar = () => {
  const [rating, setRating] = useState(2);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <>
      <div className="d-flex align-items-center my-3">
        <Form.Label className="me-3 fw-bold m-0">Rating</Form.Label>
        <StarRatings
          rating={rating}
          starRatedColor="#4e46b4"
          starDimension="30px"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />
      </div>
    </>
  );
};

export { RatingStar };
