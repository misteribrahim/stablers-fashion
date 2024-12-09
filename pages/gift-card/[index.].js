import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import MainLayout from '../../Layout/mainLayout';
import NewArrival from '../../components/newarrival';
import Heading from '../../components/heading';

const GiftCard2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Select eGift Card Value');

    const options = [
        '$5.00',
        '$10.00',
        '$25.00',
        '$50.00',
        '$75.00',
        '$100.00',

    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
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
    return (
        <>
            <MainLayout>
                <section className="p-5 sec-bg">
                    <Container>
                        <Row className='align-items-stretch'>
                            <Col lg={7}>
                                <div className='card-box'>
                                    <img src="/images/Gift-Card.png" alt="Gift Card" />
                                </div>
                            </Col>
                            <Col lg={5}>
                                <h3 className='text-dark mb-3' style={{ fontSize: "20px" }}>eGift Card</h3>
                                <h4>$5.00 - $1000.00</h4>
                                <div className="custom-select w-100 my-3">
                                    <div className={`select-box ${isOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                                        <span className="selected">{selectedOption}</span>
                                        <span className="arrow">{isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</span>
                                    </div>
                                    {isOpen && (
                                        <ul className="options-list">
                                            {options.map((option, index) => (
                                                <li
                                                    key={index}
                                                    className={`option ${selectedOption === option ? 'selected-option' : ''}`}
                                                    onClick={() => handleOptionClick(option)}
                                                >
                                                    {option}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <Button
                                    className="mb-1 btn btn-primary w-100"
                                    variant="success"
                                    aria-label="Subscribe to newsletter"
                                >
                                    Add To Cart
                                </Button>
                                <div className='pt-2'>
                                    <p style={{ color: "#000", fontWeight: "600" }}>The Perfect Gift</p>
                                    <p>Step into timeless style with our classic moccasin shoes, crafted to offer both elegance and comfort. Designed from premium microfiber material, these shoes feature a smooth finish combined with a crocodile-embossed pattern, creating a refined and sophisticated appearance. The sides are finished with a sleek, smooth design, while the stylish double monk strap with gunmetal adjustable clips adds a modern touch. These moccasins are equipped with an anti-slip sole and lined with breathable materials to ensure comfort throughout the day.</p>
                                    <p>Perfect for smart casual or formal outfits, our men’s shoes offer versatile styling for any occasion. Whether at work or a special event, experience the perfect blend of classic design, comfort, and luxury.</p>
                                    <p>Step into timeless style with our classic moccasin shoes, crafted to offer both elegance and comfort. Designed from premium microfiber material, these shoes feature a smooth finish combined with a crocodile-embossed pattern, creating a refined and sophisticated appearance. The sides are finished with a sleek, smooth design, while the stylish double monk strap with gunmetal adjustable clips adds a modern touch. These moccasins are equipped with an anti-slip sole and lined with breathable materials to ensure comfort throughout the day.</p>
                                    <p>Perfect for smart casual or formal outfits, our men’s shoes offer versatile styling for any occasion. Whether at work or a special event, experience the perfect blend of classic design, comfort, and luxury. Perfect for smart casual or formal outfits, our men’s shoes offer versatile styling for any occasion Whether at work or a special event, experience the perfect blend of classic design, comfort, and luxury at work or a special event, experience the perfect blend of classic design, comfort, and luxury.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Heading
                                    subHeading="Items"
                                    title="RECENTLY VIEWED"
                                />
                                <NewArrival products={products} noHeading  noBtn/>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </MainLayout>
        </>
    );
};

export default GiftCard2;
