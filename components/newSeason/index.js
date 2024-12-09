import Link from 'next/link';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import classes from "./index.module.scss";
import { Fade } from 'react-awesome-reveal';
import Heading from '../heading';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importing icons

const NewSeason = () => {
    const [favorites, setFavorites] = useState({});

    const toggleFavorite = (id) => {
        setFavorites((prevFavorites) => ({
            ...prevFavorites,
            [id]: !prevFavorites[id]
        }));
    };

    const cardData = [
        {
            id: 1,
            image: '/images/season1.jpg',
            title: "BROGUE SHOES",
            link: '/store',
            alt: "",
            badgeText: "10% OFF"
        },
        {
            id: 2,
            image: '/images/season2.jpg',
            title: "LACE UP SHOES",
            link: '/store',
            alt: "",
            badgeText: "15% OFF"
        },
        {
            id: 3,
            image: '/images/season3.jpg',
            title: "LOAFER SHOES",
            link: '/store',
            alt: "",
            badgeText: "5% OFF"
        },
        {
            id: 4,
            image: '/images/season4.jpg',
            title: "MONK SHOES",
            link: '/store',
            alt: "",
            badgeText: "20% OFF"
        },
    ];

    return (
        <div className='res-section'>
            <Container>
                <Heading
                    subHeading="New Season"
                    title="SHOES CATEGORIES 2024"
                    subtitle="This season, we embarked on a journey to discover a picturesque harbour-side destination. White stone, boats drifting peacefully, masts swaying, and clear skies. We visited a European country known for its quaint, plentiful fishing harbours."
                />
                <Row>
                    {cardData.map(card => (
                        <Col lg={3} md={6} key={card.id} className='p-1 mb-2'>
                            <Fade>
                                <div className={classes.cardBox}>
                                    <Link href={card.link} passHref>
                                        <div className={classes.card}>
                                            <div className={classes.offers}>
                                                <span className={classes.left}>
                                                    <div onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleFavorite(card.id);
                                                    }}>
                                                        {favorites[card.id] ? (
                                                            <FaHeart  style={{color:"red"}}/>
                                                        ) : (
                                                            <FaRegHeart />
                                                        )}
                                                    </div>
                                                </span>
                                                <span className={classes.right}>
                                                    <Badge bg="danger" className={classes.badge}>{card.badgeText}</Badge>
                                                </span>
                                            </div>

                                            <div className='img-box'>
                                                <img src={card.image} alt={card.alt} />
                                            </div>
                                            <span className={classes.title}>
                                                <h4>{card.title}</h4>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                            </Fade>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default NewSeason;
