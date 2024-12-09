import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FiEyeOff, FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import * as Yup from "yup";
import { Formik } from "formik";
import classes from "../index.module.scss";
import AuthLayout from "../../../Layout/authLayout";


const NewPassword = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <AuthLayout>
      <div className={classes.authHolder}>
        <Row>
          <Col md={6} className="pe-0">
            <div className={`image-box ${classes.authImg}`} />
          </Col>
          <Col md={6} className="ps-0">
            <div className={classes.authBox}>
              <Formik
                initialValues={{
                  password: "",
                  confirmpassword: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => console.log("Submitted values: ", values)}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                  <Form className="auth-form" noValidate onSubmit={handleSubmit}>
                    <div>
                      <h2>Set New Password</h2>
                      <p>Enter new password here</p>
                    </div>

                    <Form.Group className="mb-3 form-group relative" controlId="password">
                      <FiLock className="inputIcon" />
                      <Form.Control
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="New Password"
                        onChange={handleChange}
                        value={values.password}
                        isInvalid={!!errors.password && touched.password}
                      />
                      {!(errors.password && touched.password) && (
                        <span className={classes.eyeIcon} onClick={togglePasswordVisibility}>
                          {isPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
                        </span>
                      )}
                      <Form.Control.Feedback type="invalid">
                        {errors.password}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 form-group relative" controlId="confirmpassword">
                      <FiLock className="inputIcon" />
                      <Form.Control
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        name="confirmpassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={values.confirmpassword}
                        isInvalid={!!errors.confirmpassword && touched.confirmpassword}
                      />
                      {!(errors.confirmpassword && touched.confirmpassword) && (
                        <span
                          className={classes.eyeIcon}
                          onClick={toggleConfirmPasswordVisibility}
                        >
                          {isConfirmPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
                        </span>
                      )}
                      <Form.Control.Feedback type="invalid">
                        {errors.confirmpassword}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" className="w-100">
                      Submit
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </div>
    </AuthLayout>
  );
};

export default NewPassword;
