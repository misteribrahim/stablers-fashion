import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import MainLayout from '../../../Layout/mainLayout';
import classes from "./index.module.scss"
import { Tabs, Tab } from 'react-bootstrap';
import Link from 'next/link';
import HaveNot from '../../../components/haven’t';
import { LiaEdit } from "react-icons/lia";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from 'react-icons/io5';
import { FiEyeOff, FiLock } from 'react-icons/fi';
import AllModel from '../../../components/overAllModel';
import AddressBook from '../../../components/addressBook';


const Accounts = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
  const [AllModelModalShow, setAllModelModalShow] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible((prev) => !prev);
  };

  const toggleCurrentPasswordVisibility = () => {
    setIsCurrentPasswordVisible((prev) => !prev);
  };

  return (
    <>
    <MainLayout>
      <Container>
        <div className={classes.account}>
          <h5>HI IBRAHIM KHAN</h5>
          <Link href="/">
            <Button className="btn">Log Out</Button>
          </Link>

        </div>
        <div className="account-management">
          <Tabs defaultActiveKey="addresses" id="justify-tab-example" className="mb-3" justify>
            <Tab
              eventKey="dashboard"
              title={
                <Link href="/dashboard/user">
                  <span>
                    <img src="/images/Dashboard Layout.png" alt="Dashboard" style={{ width: '20px', marginRight: '8px' }} />
                    Dashboard
                  </span>
                </Link>
              }
            >
            </Tab>
            <Tab
              eventKey="order-history"
              title={
                <span>
                  <img src="/images/order-history-icon 1.png" alt="Order History" style={{ width: '20px', marginRight: '8px' }} />
                  Order History
                </span>
              }
            >
              <div className='d-flex justify-content-between pe-5 ps-5'>
                <h5>Order History</h5>

              </div>
              <HaveNot style
                imgSrc="/images/bord2.png"
                heading="No Order Has Been Placed Yet!"
                description="Place an order for your favorite product"
              />
              <div className='m-auto mb-5 text-center'>
                <Link href="/store" >
                  <Button className="btn">Go To Shop</Button>
                </Link>
              </div>
            </Tab>
            <Tab
              eventKey="addresses"
              title={
                <span>
                  <img src="/images/Address.png" alt="Addresses" style={{ width: '20px', marginRight: '8px' }} />
                  Addresses
                </span>
              }
            >
              {/* <div>

                <div className='d-flex justify-content-between pe-5 ps-5'>
                  <h5>ADDRESSES</h5>
                  <Link href="/">
                    <Button className="btn">Add an Address</Button>
                  </Link>
                </div>
                <HaveNot
                  imgSrc="/images/bord2.png"
                  heading="You Haven’t Saved Any Address Yet!"
                  description="Add an address for a fast checkout"
                />
                <div>
                  <Form >
                    <div className={classes.title}>
                      <h5 className='text-dark py-2'>ADD ADDRESS</h5>
                    </div>
                    <Row>
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
                          <Form.Control placeholder="Company Name (optional)" type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Address 1" type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Address 2" type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Town/City" type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="United Kingdom" type="text" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Zip Code" type="tel" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Phone Number" type="tel" />
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Email Address" type="email" />
                        </Form.Group>
                        <Form.Check type="checkbox" id="check-api-checkbox" className="checkbox-container">
                          <Form.Check.Input type="checkbox" isValid />
                          <Form.Check.Label>Set as default address</Form.Check.Label>
                        </Form.Check>
                      </Col>
                    </Row>
                    <div className='d-flex gap-3 py-4'>
                      <Button type="submit">
                        Add Address
                      </Button>
                      <Button className='whites' >
                        Cancel
                      </Button>
                    </div>

                  </Form>
                </div>

                <div className='py-5'>
                  <div className={classes.title}>
                    <h5 className='text-dark py-2'>ADDRESSES</h5>
                    <p>The following addresses will be used on checkout page by default.</p>
                    <Row>
                      <Col>
                        <div className='card p-3'>
                          <span className='d-flex justify-content-between'>
                            <h5 className='text-dark'>Ibrahim Khan</h5>
                            <p style={{ color: "#753403" }}>Default</p>
                          </span>
                          <p>4 Ebor House, London Ebor Business Park</p>
                          <p>Millfield Lane, Nether Poppleton</p>
                          <p>York</p>
                          <p>YO26 6QY</p>
                          <p>United Kingdom</p>
                          <hr></hr>
                          <span className={classes.edit}>
                            <Link href="/">
                              <span><LiaEdit />Edit</span></Link>
                            <span className='text-danger' onClick={() => setAllModelModalShow(true)}><MdOutlineDeleteOutline />Delete</span>
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div className='card p-3'>
                          <h5 className='text-dark'>Ibrahim Khan</h5>
                          <p>4 Ebor House, London Ebor Business Park</p>
                          <p>Millfield Lane, Nether Poppleton</p>
                          <p>York</p>
                          <p>YO26 6QY</p>
                          <p>United Kingdom</p>
                          <hr></hr>
                          <span className={classes.edit}>
                            <Link href="/">
                              <span><LiaEdit />Edit</span></Link>
                            <span className='text-danger' onClick={() => setAllModelModalShow(true)}><MdOutlineDeleteOutline />Delete</span>
                          </span>
                        </div>
                      </Col>
                      <Col>
                        <div className='card p-3'>
                          <h5 className='text-dark'>Ibrahim Khan</h5>
                          <p>4 Ebor House, London Ebor Business Park</p>
                          <p>Millfield Lane, Nether Poppleton</p>
                          <p>York</p>
                          <p>YO26 6QY</p>
                          <p>United Kingdom</p>
                          <hr></hr>
                          <span className={classes.edit}>
                            <Link href="/">
                              <span><LiaEdit />Edit</span></Link>
                            <span className='text-danger'onClick={() => setAllModelModalShow(true)}><MdOutlineDeleteOutline />Delete</span>
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div> */}
              <AddressBook/>
            </Tab>
            <Tab
              eventKey="wish-list"
              title={
                <Link href="/wishList">
                  <span>
                    <img src="/images/Heart 3.png" alt="Wish List" style={{ width: '20px', marginRight: '8px' }} />
                    Wish List
                  </span>
                </Link>
              }
            >

              <div className='d-flex justify-content-between pe-5 ps-5'>
                <h5>Order History</h5>

              </div>
              <HaveNot style
                imgSrc="/images/bord2.png"
                heading="No Order Has Been Placed Yet!"
                description="Place an order for your favorite product"
              />
              <div className='m-auto mb-5 text-center'>
                <Link href="/store" >
                  <Button className="btn">Go To Shop</Button>
                </Link>
              </div>
            </Tab>
            <Tab
              eventKey="account-details"
              title={
                <span>
                  <img src="/images/Edit User.png" alt="Account Details" style={{ width: '20px', marginRight: '8px' }} />
                  Account Details
                </span>
              }
            >
              <div>
                <div>
                  <Form >
                    <div className={classes.title}>
                      <h5 className='text-dark py-2'>ACCOUNT DETAILS</h5>
                      <p>Edit your account details here!</p>
                    </div>
                    <Row>
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
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Email Address" type="email" />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="form-group">
                          <Form.Control placeholder="Phone Number" type="tel" />
                        </Form.Group>
                      </Col>
                      <p>This may be needed to be used as a backup account security</p>
                      <hr></hr>
                      <div className={classes.title}>
                        <h5 className='text-dark py-2'>CHANGE PASSWORD</h5>
                        <p>Change your password here!</p>
                      </div>


                      <Col lg={12}>
                        <Form.Group className="mb-3 form-group relative" controlId="currentpassword">
                          <FiLock className="inputIcon " />
                          <Form.Control
                            type={isCurrentPasswordVisible ? "text" : "password"}
                            name="currentpassword"
                            placeholder="Current Password"
                          />
                          <span className={classes.eyeIcon} onClick={toggleCurrentPasswordVisibility}>
                            {isCurrentPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
                          </span>
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-3 form-group relative" controlId="password">
                          <FiLock className="inputIcon" />
                          <Form.Control
                            type={isPasswordVisible ? "text" : "password"}
                            name="password"
                            placeholder="New Password"

                          />
                          <span className={classes.eyeIcon} onClick={togglePasswordVisibility}>
                            {isPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
                          </span>
                        </Form.Group>
                      </Col>
                      <Col lg={12}>
                        <Form.Group className="mb-3 form-group relative" controlId="confirmpassword">
                          <FiLock className="inputIcon" />
                          <Form.Control
                            type={isConfirmPasswordVisible ? "text" : "password"}
                            name="confirmpassword"
                            placeholder="Confirm Password"

                          />
                          <span className={classes.eyeIcon} onClick={toggleConfirmPasswordVisibility}>
                            {isConfirmPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
                          </span>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className='d-flex gap-3 py-4'>
                      <Button type="submit">
                        Save
                      </Button>
                      <Button className='whites' >
                        Cancel
                      </Button>
                    </div>

                  </Form>
                </div>
              </div>
            </Tab>
            <Tab
              eventKey="faq"
              title={
                <Link href="/faqs">
                  <span>
                    <img src="/images/Ask Question.png" alt="FAQ’s" style={{ width: '20px', marginRight: '8px' }} />
                    FAQ’s
                  </span>
                </Link>
              }
            >
            </Tab>
            <Tab
              eventKey="return-delivery"
              title={
                <Link href="/exchange">
                  <span>
                    <img src="/images/In Transit.png" alt="Return & Delivery" style={{ width: '20px', marginRight: '8px' }} />
                    Return & Delivery
                  </span>
                </Link>
              }
            >
            </Tab>
          </Tabs>
        </div>
      </Container>
    </MainLayout >
    <AllModel show={AllModelModalShow} onHide={() => setAllModelModalShow(false)} />
    </>
  );
};

export default Accounts;
