import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import classes from "./index.module.scss";

const policy = [
  {
    icon: "/images/globe.png",
    hoverIcon: "/images/globe.gif", 
    title: "Free World Delivery",
    description: "Enjoy the ultimate convenience of free world delivery, bringing your favorite products straight to your doorstep without any extra cost.",
    alt: "Icon representing free world delivery"
  },
  {
    icon: "/images/refund.png",
    hoverIcon: "/images/refund.gif", 
    title: "Money Back Guarantee",
    description: "Shop with absolute complete confidence with our Money Back Guarantee, ensuring you receive a full refund if you're not completely satisfied.",
    alt: "Icon representing money back guarantee"
  },
  {
    icon: "/images/Service.png",
    hoverIcon: "/images/Service.gif", 
    title: "Best Online Support",
    description: "Experience the absolute very best online support with our highly dedicated and professional team available 24/7 to assist you with any queries.",
    alt: "Icon representing best online support"
  },
  {
    icon: "/images/gift.png",
    hoverIcon: "/images/gift.gif", 
    title: "Special Gift Card",
    description: "Give the perfect gifts of choice with our Special Gift Card, perfect for any occasion. Surprise your loved ones with something they’ll love.",
    alt: "Icon representing special gift card"
  }
];

const Policy = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={classes.policySection}>
      <Container>
        <Row className="text-center">
          {policy.map((item, index) => (
            <Col key={index} lg={3} md={6}>
              <div
                className={classes.policyItem}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <div className={`mb-3 ${classes.icon}`}>
                  <img
                    src={hoverIndex === index ? item.hoverIcon : item.icon}
                    alt={item.alt}  
                  />
                </div>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Policy;
