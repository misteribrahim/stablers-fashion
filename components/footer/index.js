import Link from 'next/link';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter, FaGooglePlus } from 'react-icons/fa';
import classes from './index.module.scss';
import { MdOutlineEmail, MdCopyright } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <Container>
                <Row>
                    <Col md={4} lg={2} sm={6} className='p-sm-0 py-4'>
                        <Link href="/">
                            <a>
                                <img
                                    src="/images/footer-logo.png"
                                    alt="Stables Fashion brand logo"
                                    width={150}
                                    height={100}
                                />
                            </a>
                        </Link>
                    </Col>
                    <Col md={4} lg={2} sm={6} className='mb-3'>
                        <h5>Quick Links</h5>
                        <ul >
                            <li><Link href="/store"><a>Men's Shoes</a></Link></li>
                            <li><Link href="/store"><a>Accessories</a></Link></li>
                            <li><Link href="/gift-card"><a>Gift Card</a></Link></li>
                            <li><Link href="/store"><a>Store</a></Link></li>
                            <li><Link href="/contactUs"><a>Contact</a></Link></li>
                        </ul>
                    </Col>
                    <Col md={4} lg={2} sm={6} className='mb-3'>
                        <h5>Customer Care</h5>
                        <ul >
                            <li><Link href="/delivery"><a>Delivery</a></Link></li>
                            <li><Link href="/exchange"><a>Returns</a></Link></li>
                            <li><Link href="/privacy"><a>Policy</a></Link></li>
                            <li><Link href="/terms"><a>Terms & Conditions</a></Link></li>
                            <li><Link href="/faqs"><a>Faqs</a></Link></li>
                            
                        </ul>
                    </Col>
                    <Col md={6} lg={2} sm={6} className='mb-3'>
                        <h5>Contact</h5>
                        <ul className={classes.footerLink}>
                            <li className='d-flex'>
                                <span><MdOutlineEmail size={16} aria-hidden="true" /></span>
                                <span>
                                    <Link href="mailto: info@stablersfashion.com">
                                        <a aria-label="Email info@stablersfashion.com">info@stablersfashion.com</a>
                                    </Link>
                                </span>
                            </li>
                            <li className='d-flex'>
                                <span><FiPhone aria-hidden="true" /></span>
                                <span>
                                    <Link href="https://wa.me/message/HJ32PM5VOUAHO1">
                                        <a aria-label="Phone 0309 1440066">0309 1440066</a>
                                    </Link>
                                </span>
                            </li>
                            <li className='d-flex'>
                                <span><SlLocationPin size={16} aria-hidden="true" /></span>
                                <span aria-label="Location United Kingdom">United Kingdom</span>
                            </li>
                        </ul>
                    </Col>
                    <Col md={6} lg={3} sm={6} className='mx-auto'>
                        <h5>Subscribe to Our Newsletter</h5>
                        <Form inline="true" className='newsletter'>
                            <Form.Group controlId="formNewsletter" className='d-flex flex-wrap'>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Email"
                                    className="mr-2 mb-1"
                                    aria-label="Enter your email"
                                />
                                <Button
                                    className="mb-1 btn btn-primary w-100 newsletter"
                                    variant="success"
                                    aria-label="Subscribe to newsletter"
                                >
                                    Subscribe
                                </Button>
                            </Form.Group>
                        </Form>
                        <small className="d-block mt-2">
                            You'll get an email about once a month. We'll never share your address.
                        </small>
                    </Col>
                </Row>
                <Row className="mt-4 pt-3 border-top border-secondary text-center">
                    <div className={`mb-2 ${classes.socialsLink}`}>
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://google.com" aria-label="Google Plus"><FaGooglePlus /></a>
                    </div>
                    <p>
                        <MdCopyright aria-hidden="true" /> Copyright All Right Reserved 2024, <strong>Stables Fashion</strong>
                    </p>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
