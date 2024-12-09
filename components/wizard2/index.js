// import React, { useState } from "react";

// const CheckoutPage = () => {
//   const [shippingMethod, setShippingMethod] = useState("free");
//   const [paymentMethod, setPaymentMethod] = useState("creditCard");
//   const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

//   return (
//     <div style={{ display: "flex", width: "100%", padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       {/* Left Section */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         {/* Account Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4 style={{ marginBottom: "10px" }}>ACCOUNT</h4>
//           <input
//             type="email"
//             placeholder="info@leatherfashion.com"
//             style={{
//               width: "100%",
//               padding: "10px",
//               marginBottom: "10px",
//               border: "1px solid #ddd",
//               borderRadius: "4px",
//             }}
//           />
//           <label>
//             <input type="checkbox" style={{ marginRight: "5px" }} />
//             Email me with news & offers
//           </label>
//         </div>

//         {/* Ship To Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4 style={{ marginBottom: "10px" }}>SHIP TO</h4>
//           <div>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input type="radio" name="shipTo" style={{ marginRight: "5px" }} />
//               SEBA St. Emporium Mall Lahore
//             </label>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input type="radio" name="shipTo" style={{ marginRight: "5px" }} />
//               Ghazi Shakur, Johar Town
//             </label>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input type="radio" name="shipTo" style={{ marginRight: "5px" }} />
//               Use a Different Address
//             </label>
//           </div>
//         </div>

//         {/* Shipping Method Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4 style={{ marginBottom: "10px" }}>SHIPPING METHOD</h4>
//           <div>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input
//                 type="radio"
//                 name="shippingMethod"
//                 value="free"
//                 checked={shippingMethod === "free"}
//                 onChange={() => setShippingMethod("free")}
//                 style={{ marginRight: "5px" }}
//               />
//               UK: United Kingdom (Free)
//             </label>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input
//                 type="radio"
//                 name="shippingMethod"
//                 value="express"
//                 checked={shippingMethod === "express"}
//                 onChange={() => setShippingMethod("express")}
//                 style={{ marginRight: "5px" }}
//               />
//               Express Delivery (UK Only) - $50.00
//             </label>
//           </div>
//         </div>

//         {/* Payment Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4 style={{ marginBottom: "10px" }}>PAYMENT</h4>
//           <div>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="creditCard"
//                 checked={paymentMethod === "creditCard"}
//                 onChange={() => setPaymentMethod("creditCard")}
//                 style={{ marginRight: "5px" }}
//               />
//               Credit Card
//             </label>
//             <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
//               <input
//                 type="text"
//                 placeholder="Card Number"
//                 style={{
//                   width: "100%",
//                   padding: "10px",
//                   marginBottom: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               <input
//                 type="text"
//                 placeholder="Expiration Date (MM/YY)"
//                 style={{
//                   width: "48%",
//                   padding: "10px",
//                   marginRight: "4%",
//                   marginBottom: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//               <input
//                 type="text"
//                 placeholder="Security Code"
//                 style={{
//                   width: "48%",
//                   padding: "10px",
//                   marginBottom: "10px",
//                   border: "1px solid #ddd",
//                   borderRadius: "4px",
//                 }}
//               />
//             </div>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="stripe"
//                 checked={paymentMethod === "stripe"}
//                 onChange={() => setPaymentMethod("stripe")}
//                 style={{ marginRight: "5px" }}
//               />
//               Pay With Stripe
//             </label>
//             <label style={{ display: "block", marginBottom: "5px" }}>
//               <input
//                 type="radio"
//                 name="paymentMethod"
//                 value="paypal"
//                 checked={paymentMethod === "paypal"}
//                 onChange={() => setPaymentMethod("paypal")}
//                 style={{ marginRight: "5px" }}
//               />
//               Pay With PayPal
//             </label>
//           </div>
//         </div>

//         {/* Billing Address Section */}
//         <div style={{ marginBottom: "20px" }}>
//           <h4 style={{ marginBottom: "10px" }}>BILLING ADDRESS</h4>
//           <label>
//             <input
//               type="checkbox"
//               checked={billingSameAsShipping}
//               onChange={() => setBillingSameAsShipping(!billingSameAsShipping)}
//               style={{ marginRight: "5px" }}
//             />
//             Same as Shipping Address
//           </label>
//           {!billingSameAsShipping && (
//             <input
//               type="text"
//               placeholder="Enter Billing Address"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 marginTop: "10px",
//                 border: "1px solid #ddd",
//                 borderRadius: "4px",
//               }}
//             />
//           )}
//         </div>

//         <button
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#000",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Pay Now
//         </button>
//       </div>

//       {/* Right Section (Order Summary) */}
//       <div style={{ width: "40%", padding: "20px", border: "1px solid #ddd", borderRadius: "4px" }}>
//         <h4 style={{ marginBottom: "20px" }}>Order Summary</h4>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//           <span>Brown Loafers</span>
//           <span>$950.00</span>
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//           <span>Discount</span>
//           <span>-$20.00</span>
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
//           <span>Shipping</span>
//           <span>{shippingMethod === "free" ? "FREE" : "$50.00"}</span>
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
//           <span>Total</span>
//           <span>$930.00</span>
//         </div>
//         <input
//           type="text"
//           placeholder="Discount Code or Gift Card"
//           style={{
//             width: "100%",
//             padding: "10px",
//             marginTop: "20px",
//             marginBottom: "10px",
//             border: "1px solid #ddd",
//             borderRadius: "4px",
//           }}
//         />
//         <button
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#000",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

import React, { useState } from "react";
import { Accordion, Button, Col, Form, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import classes from "./index.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";

const CheckoutPage = () => {
    const [shippingMethod, setShippingMethod] = useState("free");
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

    return (
        <> <Form>
            <Row>
               
                    <Col lg={7}>
                        <div className={classes.checkOut}>
                            <div className="d-flex justify-content-between checkOut pe-3">
                                <h4>ACCOUNT</h4>
                                <Dropdown className="dropDown">
                                    <Dropdown.Toggle id="dropdown-basic">
                                        <BsThreeDotsVertical />
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            <AiOutlineLogout /> Log Out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div>
                                <p style={{ fontSize: "16px" }}>info@stablersfashion.com</p>
                                <hr></hr>
                                <Form.Check type="checkbox" id="check-api-checkbox-2" className="checkbox-container">
                                    <Form.Check.Input type="checkbox" isValid />
                                    <Form.Label className="p-0 m-0" >
                                        Email with news & offers
                                    </Form.Label>
                                </Form.Check>
                            </div>
                            <div style={{ margin: "20px 0 0 0 " }}>
                                <h4>SHIP TO</h4>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <div>
                                        <label className="custom-radio">
                                            <input type="radio" name="shipTo" />
                                            <span className="custom-radio-box"></span>
                                            <div>
                                                <p className={classes.heading}>SEBA St. Emporium Mall Lahore</p>
                                                <p className="m-0">Singapore, 54000,SG</p>
                                            </div>
                                        </label>
                                    </div>
                                    <Dropdown className={`dropDown ${classes.dropDown}`}>
                                        <Dropdown.Toggle id="dropdown-basic">
                                            <BsThreeDotsVertical />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">
                                                <AiOutlineLogout /> Log Out
                                            </Dropdown.Item>

                                            <Dropdown.Item href="#/action-1">
                                                <AiOutlineLogout /> Log Out
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className={classes.contentBox}>
                                    <label className="custom-radio">
                                        <input type="radio" name="shipTo" />
                                        <span className="custom-radio-box"></span>
                                        <div>
                                            <p className={classes.heading}>SEBA St. Emporium Mall Lahore</p>
                                            <p className="m-0">Singapore, 54000,SG</p>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="accordions">
                                <Accordion className="cartAccordion" >
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Use A Different Address</Accordion.Header>
                                        <Accordion.Body>
                                            <Row>
                                                <Col lg={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Country/Region" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="First Name" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Last Name" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Address" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Apartment,suite,etc.(optional)" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="City" type="text" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Zip Code (optional)" type="text" />
                                                    </Form.Group>
                                                </Col>

                                                <Col lg={12}>
                                                    <Form.Group className="form-group">
                                                        <Form.Control placeholder="Phone Number (optional)" type="tel" />
                                                    </Form.Group>
                                                </Col>
                                                <div className="d-flex gap-3">
                                                    <Button type="submit">
                                                        Save
                                                    </Button>
                                                    <Button type="submit">
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </Row>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div style={{ margin: "20px 0 0 0 " }}>
                                <h4>SHIPPING METHOD</h4>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <div>
                                        <label className="custom-radio">
                                            <input type="radio" name="shipTo" />
                                            <span className="custom-radio-box"></span>
                                            <div>
                                                <p className={classes.heading}>UK / United Kingdom</p>
                                            </div>
                                        </label>
                                    </div>
                                    <strong className="text-dark">Free</strong>
                                </div>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <div>
                                        <label className="custom-radio">
                                            <input type="radio" name="shipTo" />
                                            <span className="custom-radio-box"></span>
                                            <div>
                                                <p className={classes.heading}>Express Delivery / UK Only</p>
                                                <p className="m-0">Orders placed before 12pm will be delivered on the same working day,<br></br>
                                                    except holidays and extreme weather conditions.</p>
                                            </div>
                                        </label>
                                    </div>
                                    <strong className="text-dark">$50.00</strong>
                                </div>
                            </div>
                            <hr></hr>
                            <div>
                                <h4 style={{ marginBottom: "10px" }}>PAYMENT</h4>
                                <p>All transaction are secured and encrypted</p>
                                <div className={classes.credit}>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <label className="custom-radio">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={paymentMethod === "creditCard"}
                                            onChange={() => setPaymentMethod("creditCard")}
                                        />
                                        <span className="custom-radio-box"></span>
                                        Credit Card
                                    </label>
                                    <div className="d-flex gap-3">
                                        <img src="/images/pay1.png" width={40}></img>
                                        <img src="/images/pay2.png" width={40}></img>
                                        <img src="/images/pay3.png" width={40}></img>
                                        <img src="/images/pay4.png" width={40}></img>
                                    </div>
                                </div>
                                <div className="px-3 py-3">
                                    <Row>
                                        <Col lg={12}>
                                            <Form.Group className="form-group">
                                                <Form.Control placeholder="Country/Region" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-group">
                                                <Form.Control placeholder="First Name" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group className="form-group">
                                                <Form.Control placeholder="Last Name" type="text" />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={12}>
                                            <Form.Group className="form-group">
                                                <Form.Control placeholder="Address" type="text" />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                </div>
                                </div>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <label className="custom-radio">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={paymentMethod === "creditCard"}
                                            onChange={() => setPaymentMethod("creditCard")}
                                        />
                                        <span className="custom-radio-box"></span>
                                        Credit Card
                                    </label>
                                    <div className="d-flex gap-3">
                                        <img src="/images/pay5.png" width={80}></img>

                                    </div>
                                </div>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <label className="custom-radio">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="creditCard"
                                            checked={paymentMethod === "creditCard"}
                                            onChange={() => setPaymentMethod("creditCard")}
                                        />
                                        <span className="custom-radio-box"></span>
                                        Credit Card
                                    </label>
                                    <div className="d-flex gap-3">
                                        <img src="/images/pay6.png" width={80}></img>
                                    </div>
                                </div>
                            </div>
                            <div style={{ margin: "20px 0 0 0 " }}>
                                <h4>SHIP TO</h4>
                                <div className={`d-flex justify-content-between py-3 ${classes.contentBox}`}>
                                    <div>
                                        <label className="custom-radio">
                                            <input type="radio" name="shipTo" />
                                            <span className="custom-radio-box"></span>
                                            <div>
                                                <p className={classes.heading}>SEBA St. Emporium Mall Lahore</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="accordions">
                                    <Accordion className="cartAccordion" >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Use A Different Address</Accordion.Header>
                                            <Accordion.Body>
                                                <Row>
                                                    <Col lg={12}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Saved Addresses" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Country/Region" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="First Name" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Last Name" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Address" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Apartment,suite,etc.(optional)" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="City" type="text" />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Zip Code (optional)" type="text" />
                                                        </Form.Group>
                                                    </Col>

                                                    <Col lg={12}>
                                                        <Form.Group className="form-group">
                                                            <Form.Control placeholder="Phone Number (optional)" type="tel" />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                           <div className="text-center w-100 mb-5">
                           <Button className="w-100" type="submit ">
                            Pay Now
                                                    </Button>
                           </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                    <div style={{ width: "40%", padding: "20px", border: "1px solid #ddd", borderRadius: "4px" }}>
                    <h4 style={{ marginBottom: "20px" }}>Order Summary</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span>Brown Loafers</span>
                        <span>$950.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span>Discount</span>
                        <span>-$20.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                        <span>Shipping</span>
                        <span>{shippingMethod === "free" ? "FREE" : "$50.00"}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
                        <span>Total</span>
                        <span>$930.00</span>
                    </div>
                    <input
                        type="text"
                        placeholder="Discount Code or Gift Card"
                        style={{
                            width: "100%",
                            padding: "10px",
                            marginTop: "20px",
                            marginBottom: "10px",
                            border: "1px solid #ddd",
                            borderRadius: "4px",
                        }}
                    />
                    <button
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#000",
                            color: "#fff",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Apply
                    </button>
                </div>
                    </Col>
                                       
            </Row>
            </Form> 
        </>
    );
};

export default CheckoutPage;

