import React from 'react';
import MainLayout from '../../Layout/mainLayout';
import SecondaryBanner from '../../components/secondaryBanner';
import Link from 'next/link';
import { Button, Col, Form, Row } from 'react-bootstrap';

function GiftCard() {
    return (
        <MainLayout>
            <SecondaryBanner
                img={"/images/giftcard.png"}
                title={"Gift Cards"}
                desc={
                    "If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form."
                }
            />
            <div className="privacyPolicy">
                <Row>
                <Col lg={8} style={{textAlign:"justify", paddingRight:"20px"}}>
                    <div>
                        <h5>The Perfect Gift</h5>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects. Should any of your registration information change, please notify us immediately at the following e-mail address <Link href="/" passHref>demo.stablersfashion.com </Link>. We may also change registration requirements from time to time.</p>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects. Should any of your registration information change, please notify us immediately at the following e-mail address <Link href="/" passHref>demo.stablersfashion.com </Link>. We may also change registration requirements from time to time.</p>
                    </div>
                    <div >
                        <h5>How To Buy</h5>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects. Should any of your registration information change, please notify us immediately at the following e-mail address <Link href="/" passHref>demo.stablersfashion.com </Link>. We may also change registration requirements from time to time.</p>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects.</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className='gift pt-4'>
                       <div className='img-box'>
                       <img src="/images/Gift-Card.png" alt="logo" />
                       </div>
                        <div className='px-2'>
                        <Link href="/gift-card/index.js">
                        <Button
                            className="mb-1 btn btn-primary  w-100 "
                            variant="success"
                            aria-label="Subscribe to newsletter"
                        >
                            Buy An eGift Card
                        </Button>
                        </Link>
                        </div>
                    </div>

                </Col>
                <Col>
                    <div >
                        <h5>How To Spend</h5>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects. Should any of your registration information change, please notify us immediately at the following e-mail address <Link href="/" passHref>demo.stablersfashion.com </Link>. We may also change registration requirements from time to time.</p>
                        <p>We only allow our service providers to handle your personal data when we have confirmed that they apply appropriate data protection and security controls. We also impose contractual obligations on service providers relating to data protection and security, which mean they can only use your data to provide services to us and to you, and for no other purposes. All payments are provided through a trusted third party payment service provider such as Worldpay. Worldpay acts as Data Controller of your information for the purposes of payments for products.</p>
                    </div>
                    <div>
                        <h5>Returns</h5>
                        <p>To use some of the services or features made available to you on this Site you will need to register for an account. When you register you are required to provide information about yourself that is true, accurate, current, and complete in all respects. Should any of your registration information change, please notify us immediately at the following e-mail address <Link href="/" passHref>demo.stablersfashion.com </Link>. We may also change registration requirements from time to time.</p>
                        <p>Email:<Link href="mailto: info@stablersfashion.com" >
                            <a className='px-3' aria-label="Email info@stablersfashion.com">info@stablersfashion.com</a>
                        </Link></p>
                        <p>Phone:<Link href="https://wa.me/message/HJ32PM5VOUAHO1">
                            <a className='px-2' aria-label="Phone +92 309 1440 066 ">+92 309 1440 066 </a>
                        </Link></p>
                    </div>
                    <div>
                        <h5>Gift Card Balance Check</h5>
                        <p>Please use the below Gift Card balance checker to find out how much is left on your Gift Card by entering your Gift Card number followed by its 4 digit PIN (if applicable).</p>
                    </div>

                    <Form inline="true" className='newsletter'>
                        <Form.Group controlId="formNewsletter" className='d-flex  gap-3'>
                            <Form.Control
                                type="email"
                                placeholder="Gift Card Number"
                                className="mr-2 mb-1 w-25"
                                aria-label="Enter your email"

                            />
                            <Button
                                className="mb-1 btn btn-primary  "
                                variant="success"
                                aria-label="Subscribe to newsletter"
                            >
                                Check Balance
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
                </Row>
            </div>
        </MainLayout>

    )
}

export default GiftCard
