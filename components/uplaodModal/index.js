import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import classes from "./index.module.scss";
import { PiUploadSimple } from "react-icons/pi";
import Link from 'next/link';

const UploadImg = (props) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [dragging, setDragging] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        previewImage(file);
    };

    const previewImage = (file) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragging(false);
        const file = event.dataTransfer.files[0];
        previewImage(file);
    };


    const handleRemoveImage = () => {
        setImagePreview(null);
    };

    return (
        <Modal className="sizeGuide" {...props} size="md" centered>
            <Modal.Header closeButton>
                <Modal.Title>Upload Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div
                    className={`${classes.buttonGroup} ${dragging ? classes.dragActive : ""}`} // Add dragging effect class
                    onDragOver={handleDragOver}  // Trigger when dragging over
                    onDragLeave={handleDragLeave}  // Trigger when dragging leaves
                    onDrop={handleDrop}  // Handle drop event
                >
                    <label
                        htmlFor="upload"
                        className={`${classes.customButton} ${classes.uploadButton}`}
                        style={{
                            backgroundImage: imagePreview ? `url(${imagePreview})` : "none",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {!imagePreview && (
                            <div className={classes.imgBox}>
                                <PiUploadSimple />
                                <p className="mt-4">Upload Image</p>
                            </div>
                        )}
                        <input
                            type="file"
                            id="upload"
                            className={classes.uploadInput}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        {imagePreview && <FaTimes className={classes.removeIcon} onClick={handleRemoveImage} />}
                    </label>
                    <p className='text-center'>Drag & drop your image here, or click to upload.</p>
                    <Form >
                        <Form.Label>Add Description</Form.Label>
                        <Form.Group className="mb-3 form-group" controlId="message">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                name="message"
                                rows={4}
                                className="text-input"
                            />
                        </Form.Group>
                        
                        <Link href="">
                        <Button className="btn w-100">Add To Cart</Button>
                    </Link>
                    </Form>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default UploadImg;
