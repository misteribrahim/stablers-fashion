import React from 'react';
import Slider from "react-slick";
import classes from "./index.module.scss";
import Link from 'next/link';
import Heading from '../heading';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const products = [
    { title: "Regal", imageUrl: "/images/product1.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Regal shoe product" },
    { title: "Atherton", imageUrl: "/images/product2.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Atherton shoe product" },
    { title: "Aldwych", imageUrl: "/images/product3.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Aldwych shoe product" },
    { title: "Regal", imageUrl: "/images/product4.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Regal shoe product" },
    { title: "Atherton", imageUrl: "/images/product5.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Atherton shoe product" },
    { title: "Aldwych", imageUrl: "/images/product6.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Aldwych shoe product" },
    { title: "Regal", imageUrl: "/images/product1.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Regal shoe product" },
    { title: "Atherton", imageUrl: "/images/product2.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Atherton shoe product" },
    { title: "Aldwych", imageUrl: "/images/product3.png", price: "Rs.31,920", newPrice:"Rs.28.99", buttonText: 'Buy Now', link: '/product/shoes', alt: "Aldwych shoe product" },
  ];

  return (
    <section>
      <div>
        <Heading
          title="NEW ARRIVALS"
          subtitle="Lorem ipsum is a placeholder text commonly used to demonstrate"
        />
      </div>
      <Slider {...settings} className={`arrivel ${classes.sliderContainer}`}>
        {products.map((product, index) => (
          <div key={index} className={classes.productCard}>
            <div className={classes.imgBox}>
              <img src={product.imageUrl} alt={product.alt} />
            </div>
            <div className='p-4'>
              <strong>{product.title}</strong>
              <div className={classes.starRating}>
                <FaStar aria-label="Full star rating" />
                <FaStar aria-label="Full star rating" />
                <FaStar aria-label="Full star rating" />
                <FaStar aria-label="Full star rating" />
                <FaStarHalfAlt aria-label="Half star rating" />
              </div>
              <div className='d-flex justify-content-around mb-2'>
                <del className='text-danger'>{product.price}</del>
                <span>{product.newPrice}</span>
              </div>
              <Link href={product.link} passHref>
                <a className="btn btn-primary w-100" aria-label={`Buy ${product.title}`}>{product.buttonText}</a>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ProductSlider;
