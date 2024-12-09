import React, { useState, useRef } from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import MainLayout from '../../Layout/mainLayout';
import SecondaryBanner from '../../components/secondaryBanner';
import classes from "./index.module.scss";

const faqItems = [
    { img: "/images/Paid.png", title: "PURCHASES" },
    { img: "/images/park.png", title: "PRODUCTS" },
    { img: "/images/ransit.png", title: "SHIPPING" },
    { img: "/images/exchange.png", title: "REFUND & RETURNS" }
];

const faqsContent = {
    PURCHASES: [
        { question: "Do I need to open an account to place an order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "What are the benefits of registering for an account?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Will I be charged for delivery?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Will I have to pay duty and taxes?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "What payment method can I use to purchase online?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can I speak to someone about my order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can I amend or cancel an item from my order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "What if the item I want is out of stock?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Do you offer Click & Collect?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can I purchase gift vouchers online?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
    ],
    PRODUCTS: [
        { question: "How do I know what shoe size to order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Do you offer wide fitting shoes?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "What size shoe tree should I order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "How do I care for my shoes or boots?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can the soles of my shoes be repaired?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can I order “stick-on rubber soles” and/or metal toe tips?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "What size belt should I order?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
    ],
    SHIPPING: [
        { question: "Who will deliver my package, and how long will it take?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "How do I track my parcel?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Do you ship to P.O. boxes?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
    ],
    REFUND: [
        { question: "How can I return an item?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "Can I exchange an item?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." },
        { question: "How long will it take to receive a refund?", answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..." }
    ]
};

const Faqs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const purchasesRef = useRef(null);
    const productsRef = useRef(null);
    const shippingRef = useRef(null);
    const refundRef = useRef(null);
    const topRef = useRef(null); 

    const handleClick = (index, ref) => {
        setActiveIndex(index);
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToTop = () => {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <MainLayout>
            <SecondaryBanner
                img="/images/faqsbg.png"
                title="FREQUENTLY ASKED QUESTIONS"
                desc="If you need help or have a query, feel free to contact us via phone, email, or by filling out the contact form."
            />
            <section className="p-5 sec-bg" ref={topRef}>
                <Container>
                    <Row className="justify-content-center">
                        {faqItems.map((item, index) => {
                            const isActive = activeIndex === index; 
                            return (
                                <Col lg={3} md={4} sm={6} key={index} className="text-center mb-4">
                                    <div
                                        className={`${classes.faqItem} ${isActive ? classes.active : ''}`}
                                        style={{ backgroundColor: isActive ? '#F7F3F0' : 'transparent' }} 
                                        onClick={() => handleClick(index, index === 0 ? purchasesRef : index === 1 ? productsRef : index === 2 ? shippingRef : refundRef)}
                                    >
                                        <img src={item.img} alt={item.title} className="mb-3" />
                                        <p>{item.title}</p>
                                    </div>
                                </Col>
                            );
                        })}
                    </Row>

                    {Object.entries(faqsContent).map(([category, faqs]) => (
                        <div className="accordions faqs py-3" key={category} ref={category === "PURCHASES" ? purchasesRef : category === "PRODUCTS" ? productsRef : category === "SHIPPING" ? shippingRef : refundRef}>
                            <h4 id={category}>{category}</h4>
                            <span className={`pb-4 ${classes.goBack}`} onClick={scrollToTop}>Back To Top</span>
                            <Accordion className='pt-4'>
                                {faqs.map((faq, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>{`${String(index + 1).padStart(2, '0')}. ${faq.question}`}</Accordion.Header>
                                        <Accordion.Body>
                                            {faq.answer}
                                            {category === "SHIPPING" && (
                                                <table className="shipping-table mt-3">
                                                    <thead>
                                                        <tr>
                                                            <th>Region</th>
                                                            <th>Timeframe</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>U.K.</td>
                                                            <td>1-3 Business Days.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Europe & North America</td>
                                                            <td>2-3 Business Days.</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Rest of the World</td>
                                                            <td>3-5 Business Days.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            )}
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </Container>
            </section>
        </MainLayout>
    );
};

export default Faqs;
