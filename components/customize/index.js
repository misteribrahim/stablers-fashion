import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Heading from '../heading';
import classes from "./index.module.scss"

const Customize = () => {
    return (
        <section style={{paddingTop:"70px"}}>
            <Container>
                <div className={classes.customize}>

                    <Row className='p-0'>
                        <Col lg={6} >
                            <div className='img-box'>
                                <img src="/images/customize-banner.png" alt=""/>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Heading
                            handCrafted
                                subHeading="Amazing New Feature!"
                                title="CUSTOMIZE YOUR OWN SHOES"
                                subtitle="We offer a personalized shoe customization experience, allowing you to design your footwear to match your unique style. Choose from various colors, materials, and designs to create shoes that are truly yours"
                            />
                        </Col>
                    </Row>

                </div>
            </Container>
        </section>
    )
}

export default Customize
