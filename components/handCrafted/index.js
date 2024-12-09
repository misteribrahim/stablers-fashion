import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./index.module.scss";
import Slider from "react-slick";
import Heading from "../heading";

function HandCrafted() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
  };

  const news = [
    {
      path: "/images/Handcrafted1.png",
      alt: "Elegant handcrafted shoes with fine leather finish",
    },
    {
      path: "/images/Handcrafted2.png",
      alt: "Artisan crafting shoes with attention to detail",
    },
    {
      path: "/images/Handcrafted3.png",
      alt: "Close-up of high-quality handcrafted shoes",
    },
    {
      path: "/images/Handcrafted2.png",
      alt: "Elegant handcrafted shoes on display",
    },
  ];

  return (
    <section style={{ padding: "140px 0 100px 0" }}>
      <Container>
        <div className={`handCrafted ${classes.handCrafted}`}>
          <Row>
            <Col lg={6}>
              <div className={classes.slider}>
                <Slider key={news.length} {...settings}>
                  {news.map((item, index) => (
                    <div key={index}>
                      <div className={`img-box ${classes.imgBox}`}>
                        <img
                          src={item.path}
                          alt={item.alt}
                          onError={(e) => (e.target.src = "/images/placeholder.png")}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
            <Col lg={6}>
              <Heading
                handCrafted
                subHeading="Handcrafted"
                title="ELEGANT PRODUCTS"
                subtitle="Our shoes are crafted with precision, combining expert craftsmanship and high-quality materials at every stage of production. From design to final assembly, we ensure durability, comfort, and style in every pair."
              />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default HandCrafted;
