import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert, Form, Table } from "react-bootstrap";
import { PiArrowBendUpLeftBold } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import classes from "./index.module.scss"

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Brown Loafers",
            description: "Stylish Footwear",
            size: "UK Size: 7.5",
            price: 950,
            quantity: 1,
            image: "/images/fff.png",
        },
        {
            id: 2,
            name: "Brown Loafers",
            description: "Stylish Footwear",
            size: "UK Size: 7.5",
            price: 950,
            quantity: 1,
            image: "/images/fff.png",
        },
    ]);

    const discount = 20;

    const handleQuantityChange = (id, increment) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + increment) }
                    : item
            )
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const total = subtotal - discount;

    return (
        <section className="pb-5">
        <Container>
            <Row>
                <Col>
                    <div className="align-items-center mb-3 d-flex justify-content-between">

                        <Link href="/store" >
                            <a className="text-decoration-none d-flex align-items-center text-dark"><PiArrowBendUpLeftBold className="me-2" />
                                Continue Shopping</a>
                        </Link>
                        <p className="mb-0">{cartItems.length} Items</p>
                    </div>
                    <Alert variant="secondary" className="d-flex align-items-center mb-5">
                        <div
                            style={{
                                borderLeft: "7px solid green",
                                padding: "25px",                                
                            }}
                        >
                            <div className="d-flex align-items-center gap-3">
                                <FaRegCircleCheck size={40} />
                                <span>
                                    Items in your cart qualify for our <strong className="text-dark">Buy 4 or more pairs and get 15% off</strong> offer, and the discount has been automatically applied to our order. Items in your cart qualify for our Buy 4 or more pairs and get 15% off offer, and the discount has been automatically applied to our order
                                </span>
                            </div>
                        </div>
                    </Alert>
                    {/* 
                    <div>
                        <div className="mb-3 border-bottom pb-2 d-flex justify-content-between">
                            <span>PRODUCTS</span>
                            <span>PRICE</span>
                            <span>QUANTITY</span>
                            <span>TOTAL</span>
                        </div>
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"
                            >
                                 
                                <div className="d-flex gap-3">
                                <div>
                                    <Button
                                        variant="link"
                                        onClick={() => handleRemoveItem(item.id)}
                                    >
                                        <AiOutlineCloseCircle />
                                    </Button>
                                </div>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="img-fluid"
                                    />
                                    <div>
                                        <h6>{item.name}</h6>
                                        <p className="mb-0 text-muted">{item.description}</p>
                                        <p className="mb-0 text-muted">{item.size}</p>
                                    </div>
                                </div>
                                <div>
                                    <p>${item.price}</p>
                                </div>
                                <div>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleQuantityChange(item.id, -1)}
                                        disabled={item.quantity === 1}
                                    >
                                        -
                                    </Button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <Button
                                        variant="outline-secondary"
                                        size="sm"
                                        onClick={() => handleQuantityChange(item.id, 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <div>
                                    <p>${item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div> */}
                    <Table bordered responsive >
                        <thead>
                            <tr>
                                <th>PRODUCTS</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                            </tr>
                        </thead>
                        <tbody >
                            {cartItems.map((item) => (
                                <tr key={item.id} >
                                    {/* PRODUCTS */}
                                    <td className="d-flex gap-3 align-items-center py-4">
                                      <div className={classes.close}>
                                      <Button
                                            variant="link"
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            <AiOutlineCloseCircle />
                                        </Button>
                                      </div>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid"
                                            style={{ width: "80px", height: "auto" }}
                                        />
                                        <div>
                                            <h6>{item.name}</h6>
                                            <p className="mb-0 text-muted">{item.description}</p>
                                            <p className="mb-0 text-dark">{item.size}</p>
                                        </div>
                                    </td>

                                    {/* PRICE */}
                                    <td>${item.price.toFixed(2)}</td>

                                    {/* QUANTITY */}
                                    <td>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.id, -1)}
                                                disabled={item.quantity === 1}
                                            >
                                                -
                                            </Button>
                                            <span className="mx-2">{item.quantity}</span>
                                            <Button
                                                variant="outline-secondary"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.id, 1)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                    </td>

                                    {/* TOTAL */}
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </Col>
                <Col md={4}>
                    <div className={classes.card}>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Enter E-Gift Card Number"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control as="textarea" rows={3} placeholder="Order Note" />
                            </Form.Group>
                        </Form>
                        <hr />
                        <div className="mb-3 d-flex justify-content-between">
                            <span className="text-dark">Subtotal:</span>
                            <span className="text-end text-dark">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <span className="text-dark">Discount:</span>
                            <span className="text-end text-danger">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="mb-3 d-flex justify-content-between">
                            <span className="text-dark"><strong>TOTAL:</strong></span>
                            <span className="text-end text-dark"><strong>${total.toFixed(2)}</strong></span>
                        </div>
                        <p className="text-muted mb-3">
                            Tax included & shipping calculated at checkout
                        </p>
                        <Button className="w-100 ">Proceed To Checkout</Button>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
    );
};

export default ShoppingCart;



