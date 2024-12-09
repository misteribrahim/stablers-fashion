import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegGrinStars } from 'react-icons/fa'; 
import classes from "./index.module.scss";

const ReviewsBar = () => {
  return (
    <section style={{ padding: "0" }}>
      <div className={`d-flex align-items-center gap-2 text-center flex-wrap ${classes.reviews}`}>
        <div className="rating-text">Our customers say Excellent</div>
        <div className="star-rating" aria-label="4.6 out of 5 stars rating">
          <FaStar aria-label="Full star rating" />
          <FaStar aria-label="Full star rating" />
          <FaStar aria-label="Full star rating" />
          <FaStar aria-label="Full star rating" />
          <FaStarHalfAlt aria-label="Half star rating" />
        </div>
        <div className="rating-details">4.6 out of 5 based on 6,087 reviews</div>
        <FaRegGrinStars aria-label="Grinning star icon" />
        <FaRegGrinStars aria-label="Grinning star icon" />
      </div>
    </section>
  );
};

export default ReviewsBar;
