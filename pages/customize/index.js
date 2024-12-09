import React, { useState, useEffect, useRef } from "react";
import { Button, Col, Container, Row, Form, Accordion } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seo from "../../Seo/Seo";
import { AiOutlineMinus, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import classes from "./index.module.scss";
import { IoCloseSharp } from "react-icons/io5";

import SizeGuide from "../../components/sizeguide";
import Heading from "../../components/heading";
import UploadImg from "../../components/uplaodModal";
import NewArrival from "../../components/newarrival";


const Customize = () => {

  const [SizeGuideModalShow, setSizeGuideModalShow] = useState(false);
  const [UploadImgModalShow, setUploadImgModalShow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [favorites, setFavorites] = useState({});
  const [activeColorIndex, setActiveColorIndex] = useState(0);

  const [selectedSize, setSelectedSize] = useState(null); // 


  const unavailableSizes = ["UK 6", "UK 7.5"];
  const colorImages = [
    ["/images/fff.png", "/images/fff.png", "/images/fff.png", "/images/arrival11.png"],
    ["/images/shoes2.png", "/images/shoes2.png", "/images/shoes2.png", "/images/shoes2.png"],
    ["/images/shoes3.png", "/images/shoes3.png", "/images/shoes3.png", "/images/shoes3.png"],
    ["/images/shoes4.png", "/images/shoes4.png", "/images/shoes4.png", "/images/shoes4.png"],
  ];

  const materialImages = [
    ["/images/fff.png", "/images/fff.png", "/images/fff.png", "/images/arrival11.png"],
    ["/images/shoes2.png", "/images/shoes2.png", "/images/shoes2.png", "/images/shoes2.png"],
    ["/images/shoes3.png", "/images/shoes3.png", "/images/shoes3.png", "/images/shoes3.png"],
    ["/images/shoes4.png", "/images/shoes4.png", "/images/shoes4.png", "/images/shoes4.png"],
  ];


  const sizes = ["UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8"];

  const handleSizeClick = (size) => {
    if (!unavailableSizes.includes(size)) {
      setSelectedSize(size); // Set the selected size
    }
  };

  const socialIcons = [
    { imgSrc: "/images/whatsapp.png", link: "/" },
    { imgSrc: "/images/facebook.png", link: "/" },
    { imgSrc: "/images/print.png", link: "/" },
    { imgSrc: "/images/linkedin.png", link: "/" },
  ];


  const handleColorClick = (index) => {
    setActiveColorIndex(index);
};

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increase" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
    );
  };


  const products = [
    {
      id: 1,
      name: "Brown Loafers",
      brand: "Stylish Footware",
      price: 180.00,
      colors: ["#000", "#7b5b4d", "#7a716d"],
      colorImages: {
        "#000": {
          src: "/images/black.png",
          alt: "Black loafers"
        },
        "#7b5b4d": {
          src: "/images/brown.png",
          alt: "Brown loafers"
        },
        "#7a716d": {
          src: "/images/gray.png",
          alt: "Gray loafers"
        }
      },
      defaultImage: {
        src: "/images/arrival1.png",
        alt: "Brown loafers default view"
      },
      hoverImage: {
        src: "/images/arrival11.png",
        alt: "Brown loafers hover view"
      }
    },
    {
      id: 2,
      name: "Brown Loafers",
      brand: "Stylish Footware",
      price: 180.00,
      colors: ["#000", "#7b5b4d", "#7a716d"],
      colorImages: {
        "#000": {
          src: "/images/black.png",
          alt: "Black loafers"
        },
        "#7b5b4d": {
          src: "/images/brown.png",
          alt: "Brown loafers"
        },
        "#7a716d": {
          src: "/images/gray.png",
          alt: "Gray loafers"
        }
      },
      defaultImage: {
        src: "/images/arrival2.png",
        alt: "Brown loafers default view"
      },
      hoverImage: {
        src: "/images/arrival22.png",
        alt: "Brown loafers hover view"
      }
    },
    {
      id: 3,
      name: "Brown Loafers",
      brand: "Stylish Footware",
      price: 180.00,
      colors: ["#000", "#7b5b4d", "#7a716d"],
      colorImages: {
        "#000": {
          src: "/images/black.png",
          alt: "Black loafers"
        },
        "#7b5b4d": {
          src: "/images/brown.png",
          alt: "Brown loafers"
        },
        "#7a716d": {
          src: "/images/gray.png",
          alt: "Gray loafers"
        }
      },
      defaultImage: {
        src: "/images/arrival3.png",
        alt: "Brown loafers default view"
      },
      hoverImage: {
        src: "/images/arrival33.png",
        alt: "Brown loafers hover view"
      }
    },
    {
      id: 4,
      name: "Brown Loafers",
      brand: "Stylish Footware",
      price: 180.00,
      colors: ["#000", "#7b5b4d", "#7a716d"],
      colorImages: {
        "#000": {
          src: "/images/black.png",
          alt: "Black loafers"
        },
        "#7b5b4d": {
          src: "/images/brown.png",
          alt: "Brown loafers"
        },
        "#7a716d": {
          src: "/images/gray.png",
          alt: "Gray loafers"
        }
      },
      defaultImage: {
        src: "/images/arrival4.png",
        alt: "Brown loafers default view"
      },
      hoverImage: {
        src: "/images/arrival4.png",
        alt: "Brown loafers hover view"
      }
    },
    {
      id: 5,
      name: "Brown Loafers",
      brand: "Stylish Footware",
      price: 180.00,
      colors: ["#000", "#7b5b4d", "#7a716d"],
      colorImages: {
        "#000": {
          src: "/images/black.png",
          alt: "Black loafers"
        },
        "#7b5b4d": {
          src: "/images/brown.png",
          alt: "Brown loafers"
        },
        "#7a716d": {
          src: "/images/gray.png",
          alt: "Gray loafers"
        }
      },
      defaultImage: {
        src: "/images/arrival5.png",
        alt: "Brown loafers default view"
      },
      hoverImage: {
        src: "/images/arrival5.png",
        alt: "Brown loafers hover view"
      }
    }
  ];

  const [activeWizard, setActiveWizard] = useState(0);

  const handleToggle = () => {
    setActiveWizard((prevWizard) => (prevWizard === 0 ? 1 : 0));
  }


  return (
    <>
      <Seo />
      <section className="p-5 sec-bg">
        <Container>
          <Row>
            <Col lg={7} style={{ position: "relative" }}>

                <Col>
                <div className="img-box">
                          <img src="/images/fff.png"  style={{ borderRadius: "6px" }} />
                        </div>
                </Col>
            </Col>
            <Col lg={5} style={{ position: "relative"}}>
              <div className={classes.container}>
                <div
                  className={`${classes.productDetails} ${classes.step}`}
                  style={{
                    left: activeWizard === 0 ? "0" : "100%",
                    transition: "left 0.5s ease-in-out",
                    position: "absolute",
                    opacity: activeWizard === 0 ? 1 : 0,
                    visibility: activeWizard === 0 ? "visible" : "hidden",
                    paddingLeft: "20px"
                  }}
                >
                  <h2>CUSTOMIZE THIS SHOES</h2>

                  <div className={classes.colorsSection}>
                    <p>Colors</p>
                    {colorImages.map((_, index) => (
                      <img
                        key={index}
                        src={colorImages[index][0]}
                        alt="Color options"
                        className={`${classes.colorOption} ${activeColorIndex === index ? classes.activeColor : ""
                          }`}
                        onClick={() => handleColorClick(index)}
                      />
                    ))}
                  </div>
                  <div className={classes.colorsSection}>
                    <p>Material</p>
                    {materialImages.map((_, index) => (
                      <img
                        key={index}
                        src={colorImages[index][0]}
                        alt="Color options"
                        className={`${classes.colorOption} ${activeColorIndex === index ? classes.activeColor : ""
                          }`}
                        onClick={() => handleColorClick(index)}
                      />
                    ))}
                  </div>
                  <div className={classes.colorsSection}>
                    <p>Extensions</p>
                    {materialImages.map((_, index) => (
                      <img
                        key={index}
                        src={colorImages[index][0]}
                        alt="Color options"
                        className={`${classes.colorOption} ${activeColorIndex === index ? classes.activeColor : ""
                          }`}
                        onClick={() => handleColorClick(index)}
                      />
                    ))}
                  </div>
                  <div className={classes.sizesSection}>
                    <div className="d-flex justify-content-between">
                      <p>Size</p>
                      <span className={classes.guide} onClick={() => setSizeGuideModalShow(true)}>
                        View size guide
                      </span>
                    </div>
                    {sizes.map((size) => (
                      <Button
                        key={size}
                        className={`${classes.sizeBtn} ${unavailableSizes.includes(size) ? classes.unavailable : ''} ${selectedSize === size ? classes.selected : ''
                          }`}
                        disabled={unavailableSizes.includes(size)}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                  <hr />
                  <p>Quantity</p>
                  <div className="d-flex align-items-center gap-4">
                    <div className={classes.quantityControl}>
                      <Button onClick={() => handleQuantityChange("decrease")}>
                        <AiOutlineMinus />
                      </Button>
                      <Form.Control
                        type="text"
                        value={quantity}
                        readOnly
                        className={classes.quantityInput}
                      />
                      <Button onClick={() => handleQuantityChange("increase")}>
                        <AiOutlinePlus />
                      </Button>
                    </div>
                    <span className="d-flex gap-2">
                      <div
                        onClick={() => toggleFavorite(currentImageIndex)}
                        className={classes.wishList} style={{ cursor: "pointer" }}
                      >
                        {favorites[currentImageIndex] ? (
                          <AiFillHeart size={25} style={{ color: "red" }} />
                        ) : (
                          <AiOutlineHeart size={25} />
                        )}
                      </div>
                      Add to wishlist
                    </span>
                  </div>
                  <div className="mt-4 d-flex gap-2">
                    <Button className="w-100">Add to Cart</Button>
                    <Button className="w-100" onClick={handleToggle}>
                      Customize This Shoe
                    </Button>
                  </div>
                  <div className={classes.socialIcons}>
                    <p>Share</p>
                    {socialIcons.map((icon, index) => (
                      <Link href={icon.link} key={index}>
                        <a className={classes.socialIcon}>
                          <img
                            src={icon.imgSrc}
                            alt={`Social icon ${index + 1}`}
                            style={{ width: "30px", height: "30px" }}
                          />
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
                <div
                  className={`${classes.uploadSection} ${classes.step}`}
                  style={{
                    left: activeWizard === 1 ? "0" : "-100%",
                    transition: "left 0.5s ease-in-out",
                    position: "absolute",
                    opacity: activeWizard === 1 ? 1 : 0,
                    visibility: activeWizard === 1 ? "visible" : "hidden",
                  }}
                >
                  <div className={classes.uploadContainer}>
                    <button className={classes.closeButton} onClick={handleToggle} aria-label="Go back">
                      <IoCloseSharp />
                    </button>
                    <p className={`text-center ${classes.uploadText}`}>
                      Upload an image so that we can make similar shoes for you or customize this shoe according to your preference.
                    </p>
                    <div className={classes.buttonGroup}>
                      <Button className={classes.customButton} onClick={() => setUploadImgModalShow(true)}>
                        <div className={classes.imgBox}>
                          <img src="/images/upload-imag-icon.png" alt="Customize icon" className={classes.icon} />
                          <p className="mt-3">Upload Image</p>
                        </div>
                      </Button>
                      <Button className={classes.customButton}>
                        <div className={classes.imgBox}>
                          <img src="/images/Customize-icon.png" alt="Customize icon" className={classes.icon} />
                          <p className="mt-3">Customize this shoe</p>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Heading
                subHeading="Similar Items"
                title="YOU MAY ALSO LIKE"
              />
              <NewArrival products={products} noHeading />
            </Col>
          </Row>
        </Container>
      </section>
      <SizeGuide show={SizeGuideModalShow} onHide={() => setSizeGuideModalShow(false)} />
        <UploadImg show={UploadImgModalShow} onHide={() => setUploadImgModalShow(false)}/>
    </>
  );
};

export default Customize;




















