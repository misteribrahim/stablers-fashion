import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Heading from '../heading';

const Discount = () => {
  return (
    <section className='res-sections'>
      <Container>
        <div>
          <Heading
            subHeading="Discount"
            title="GET YOUR BEST ONE!"
            subtitle="Step up your style with exclusive discounts on all shoes! Limited-time offer—grab your favorite pair now at unbeatable prices! Comfort and fashion, all in one place—don't miss out!"
          />
          <Row> 
            <Col lg={4} className='p-0'>
              <div className='img-box'>
                <img src="/images/discount.jpg" alt="" />
              </div>
            </Col>
            <Col lg={8} className='p-0'>
              <div className='img-box'>
                <img src="/images/discount-banner.jpg" alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Discount;