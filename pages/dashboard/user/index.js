import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Heading from '../../../components/heading';
import MainLayout from '../../../Layout/mainLayout';
import Link from 'next/link';
import classes from "./index.module.scss"


const User = () => {
    const userItems = [
        {
            img: "/images/oh.png",
            title: "ORDER HISTORY",
            description: "Experience the absolute very best onlinel.",
            link: "#"
        },
        {
            img: "/images/bord2.png",
            title: "ADDRESSES",
            description: "Experience the absolute very best online.",
            link: "/dashboard/user-details"
        },
        {
            img: "/images/bord3.png",
            title: "WISHLIST",
            description: "Experience the absolute very best online.",
            link: "/wishList"
        },
        {
            img: "/images/bord4.png",
            title: "ACCOUNT DETAILS",
            description: "Experience the absolute very best online.",
            link: "/dashboard/user-details"
        },
        {
            img: "/images/bord5.png",
            title: "FAQ’S",
            description: "Experience the absolute very best online.",
            link: "/faqs"
        }
    ];

    return (
        <MainLayout>
            <section >
            <Container>
                <Row className='pt-5'>
                    <Col>
                        <div className={classes.user}>
                            <Heading
                                subHeading="HI IBRAHIM KHAN"
                                title="Welcome To Your Account"
                            />
                            <Link href="/">
                                <Button className="btn">Log Out</Button>
                            </Link>
                        </div>
                    </Col>
                </Row>
                <Row className='py-5'>
                    {userItems.map((item, index) => (
                        <Col lg={4} md={4} sm={6} className="text-center mb-4" key={index}>
                            <div className={classes.userItem}>
                                <img src={item.img} alt={item.title} className="mb-3" />
                                <h6>{item.title}</h6>
                                <p>{item.description}</p>
                                <Link href={item.link}>
                                    <a className="arrow-btn pt-3">
                                        <span className="arrows"></span>
                                    </a>
                                </Link>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            </section>
           
        </MainLayout>
    );
};

export default User;
