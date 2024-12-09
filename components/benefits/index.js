import React from 'react';
import { FaTruckFast } from "react-icons/fa6";
import classes from './index.module.scss';
import { Container } from 'react-bootstrap';

const Benefits = () => {
  const features = [
    {
      icon: <FaTruckFast />,
      title: 'Free Delivery',
      description: 'on all orders over $150',
    },
    {
      icon: <FaTruckFast />,
      title: 'Returns',
      description: 'within 28 days of delivery',
    },
    {
      icon: <FaTruckFast />,
      title: 'Secure Payments',
      description: 'Credit Card, PayPal, Amazon Pay',
    },
  ];

  return (
    <div className={classes.benefits}>
      <Container>
        <div className={classes.content}>
          {features.map((feature, index) => (
            <div key={index} className={classes.feature}>
              <div className={classes.icon}>{feature.icon}</div>
              <div className={classes.text}>
                <h4 className={classes.title}>{feature.title}</h4>
                <p className={classes.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
