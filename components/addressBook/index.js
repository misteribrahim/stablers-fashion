import React, { useState } from 'react';
import { Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { LiaEdit } from 'react-icons/lia';
import classes from "./index.module.scss";

const Addresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        address1: '',
        address2: '',
        city: '',
        country: '',
        zip: '',
        phone: '',
        email: '',
        isDefault: false,
    });
    const [deleteModalIndex, setDeleteModalIndex] = useState(null);

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleAddAddress = (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.address1 || !formData.city || !formData.zip || !formData.phone || !formData.email) {
            alert('Please fill all required fields!');
            return;
        }

        const updatedAddresses = [...addresses];

        if (formData.isDefault) {
            updatedAddresses.forEach((address) => (address.isDefault = false));
        }

        if (editingIndex !== null) {
            updatedAddresses[editingIndex] = formData;
        } else {
            updatedAddresses.push(formData);
        }

        setAddresses(updatedAddresses);
        resetForm();
    };

    const handleEditAddress = (index) => {
        setEditingIndex(index);
        setFormData(addresses[index]);
        setIsFormVisible(true);
    };

    const handleDeleteAddress = () => {
        const updatedAddresses = addresses.filter((_, i) => i !== deleteModalIndex);
        setAddresses(updatedAddresses);
        setDeleteModalIndex(null);
    };

    const resetForm = () => {
        setFormData({
            firstName: '',
            lastName: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            zip: '',
            phone: '',
            email: '',
            isDefault: false,
        });
        setEditingIndex(null);
        setIsFormVisible(false);
    };

    return (
        <div className="pe-5 ps-5">
            {!isFormVisible && (
                <>
                    <div className="d-flex justify-content-between">
                        <h5>ADDRESSES</h5>
                        <Button onClick={() => setIsFormVisible(true)}>Add an Address</Button>
                    </div>

                    {addresses.length > 0 && (
                        <p>The following addresses will be used on checkout page by default.</p>
                    )}
                </>
            )}

            {addresses.length === 0 && !isFormVisible && (
                <div className="text-center mt-4" style={{ padding: "30px 0" }}>
                    <img src="/images/bord2.png" alt="No Address" style={{ maxWidth: '200px' }} />
                    <h5>You Haven’t Saved Any Address Yet!</h5>
                    <p>Add an address for a fast checkout</p>
                </div>
            )}

            {isFormVisible && (
                <Form onSubmit={handleAddAddress}>
                    <div className="py-2">
                        <h5 className="text-dark">ADD ADDRESS</h5>
                    </div>
                    <Row style={{ paddingBottom: "50px" }}>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="First Name"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Company Name (optional)"
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Address 1"
                                    type="text"
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Address 2"
                                    type="text"
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Town/City"
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Country"
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Zip Code"
                                    type="text"
                                    name="zip"
                                    value={formData.zip}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Phone Number"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col lg={12}>
                            <Form.Group className="form-group">
                                <Form.Control
                                    placeholder="Email Address"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                />
                            </Form.Group>
                            <Form.Check
                                type="checkbox"
                                id="check-api-checkbox"
                                label="Set as default address"
                                name="isDefault"
                                checked={formData.isDefault}
                                onChange={handleFormChange}
                            />
                        </Col>
                    </Row>
                    <div className="d-flex gap-3 py-4 ">
                        <Button type="submit">Add Address</Button>
                        <Button className="whites" onClick={resetForm}>Cancel</Button>
                    </div>
                </Form>
            )}

            {!isFormVisible && (
                <Row className="mt-4" style={{ paddingBottom: "30px" }}>
                    {addresses.map((address, index) => (
                        <Col key={index} lg={4}>
                            <div className="card p-3">
                                <span className="d-flex justify-content-between">
                                    <h5 className="text-dark">
                                        {address.firstName} {address.lastName}
                                    </h5>
                                    {address.isDefault && (
                                        <p style={{ color: '#753403' }}>Default</p>
                                    )}
                                </span>
                                <p>{address.address1}</p>
                                {address.address2 && <p>{address.address2}</p>}
                                <p>{address.city}</p>
                                <p>{address.zip}</p>
                                <p>{address.country}</p>
                                <p>{address.phone}</p>
                                <p>{address.email}</p>
                                <hr />
                                <span className={classes.edit}>
                                    <span
                                        onClick={() => handleEditAddress(index)}
                                        style={{ cursor: 'pointer', color: '#007bff' }}
                                    >
                                        <LiaEdit /> Edit
                                    </span>
                                    <span
                                        onClick={() => setDeleteModalIndex(index)}
                                        style={{ cursor: 'pointer', color: 'red' }}
                                    >
                                        <MdOutlineDeleteOutline /> Delete
                                    </span>
                                </span>
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
            <Modal show={deleteModalIndex !== null} onHide={() => setDeleteModalIndex(null)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <img src="/images/del.png" alt="logo" />
                        <p>Are you sure you want to delete this address?</p>
                        <div className="d-flex gap-3 justify-content-center mb-3 mt-3">
                            <Button className="btn" onClick={handleDeleteAddress}>Delete</Button>
                            <Button className="btn" onClick={() => setDeleteModalIndex(null)}>Cancel</Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Addresses;
