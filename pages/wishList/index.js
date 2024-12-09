import React, { useState } from 'react';
import MainLayout from '../../Layout/mainLayout';
import Link from 'next/link';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import classes from "./index.module.scss";
import { LuShare2 } from "react-icons/lu";
import HaveNot from '../../components/haven’t';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import NewArrival from '../../components/newarrival';
import { RiDeleteBinLine } from "react-icons/ri";
import AllModel from '../../components/overAllModel';

function WishList() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Alphabetically, A-Z');
    const [AllModelModalShow, setAllModelModalShow] = useState(false);
    const options = [
        'Featured',
        'Best Selling',
        'Latest',
        'Alphabetically, A-Z',
        'Alphabetically, Z-A',
        'Price Low To High',
        'Price High To Low',
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const store = [
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
        },
        {
            id: 6,
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
                src: "/images/arrival6.png",
                alt: "Brown loafers default view"
            },
            hoverImage: {
                src: "/images/arrival6.png",
                alt: "Brown loafers hover view"
            }
        },
        {
            id: 7,
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
                src: "/images/arrival7.png",
                alt: "Brown loafers default view"
            },
            hoverImage: {
                src: "/images/arrival7.png",
                alt: "Brown loafers hover view"
            }
        },
        {
            id: 8,
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
                src: "/images/arrival8.png",
                alt: "Brown loafers default view"
            },
            hoverImage: {
                src: "/images/arrival8.png",
                alt: "Brown loafers hover view"
            }
        }
    ];
    return (
        <>
        <MainLayout>
            <Container>
                <div className='wishList'>
                    <div className={classes.content}>
                        <h5 className='p-b-3'>IBRAHIM KHAN’S WISH LIST</h5>
                        <span className={classes.contents}> 
                            <p onClick={() => setAllModelModalShow(true)}><LuShare2 className='me-2' />  share</p>
                        </span>
                    </div>
                    <HaveNot style
                        imgSrc="/images/bord3.png"
                        heading="Your Wishlist Is Currently Empty"
                        description="Add your favorites items to your wish list"
                    />
                    <div className='m-auto mb-5 text-center'>
                        <Link href="/store" >
                            <Button className="btn">Go To Shop</Button>
                        </Link>
                    </div>

                    <div className='px-4'>
                        <div className='d-flex justify-content-between'>
                            <h5 className='p-b-3'>IBRAHIM KHAN’S WISH LIST</h5>
                            <div className="d-flex align-items-center gap-2 ">
                                <h6>Sort By</h6>
                                <div className="custom-select">
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
                            </div>
                        </div>
                        <span className={classes.contents}> 
                            <p onClick={() => setAllModelModalShow(true)}><LuShare2 className='me-2' />  share</p>
                        </span>
                    </div>

                    <NewArrival products={store} noHeading wish noBtn />
                   <div className='px-4 pb-5 pt-2'>
                   <span><RiDeleteBinLine className='me-2'/>Remove All From Wish List</span>
                   </div>
                </div>
            </Container>
        </MainLayout>
       <AllModel show={AllModelModalShow} onHide={() => setAllModelModalShow(false)} title={"Share Wish List"} wish/>
</>
    )
}

export default WishList
