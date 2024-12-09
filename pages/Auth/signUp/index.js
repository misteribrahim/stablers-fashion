
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { FiEyeOff, FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik } from "formik";
import classes from "../index.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import AuthLayout from "../../../Layout/authLayout";


const SignUp = () => {
    const router = useRouter();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [formError, setFormError] = useState(null);

    const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () => setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters long"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long"),
        confirmpassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const handleSignUp = async (values, { setSubmitting, resetForm }) => {
        setFormError(null);
        const requestBody = {
            username: values.name,
            email: values.email,
            password: values.password,
            // confirmPassword: values.confirmpassword,
            // acceptTerms: values.terms,
        };

        console.log("Sending data:", JSON.stringify(requestBody));

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestBody),
                }
            );

            const data = await response.json();

            if (response.ok) {
                console.log("Success:", data);
                resetForm();
                router.push("/Auth/login");
            } else {
                console.log("API error:", data);
                setFormError(data.message || "An error occurred during sign-up.");
            }
        } catch (error) {
            console.error("Network error:", error);
            setFormError("An error occurred during sign-up. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };


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
                                    name: "",
                                    email: "",
                                    password: "",
                                    confirmpassword: "",
                                }}
                                validationSchema={validationSchema}
                                onSubmit={handleSignUp}
                            >
                                {({
                                    handleSubmit,
                                    handleChange,
                                    values,
                                    touched,
                                    errors,
                                    isSubmitting,
                                }) => (
                                    <Form className="auth-form" noValidate onSubmit={handleSubmit}>
                                        <div>
                                            <h2>Welcome to Stablers!</h2>
                                            <p>Register a new account</p>
                                        </div>
                                        {formError && (
                                            <div className="alert alert-danger">{formError}</div>
                                        )}
                                        <Form.Group className="mb-3 form-group relative" controlId="name">
                                            <AiOutlineUser className="inputIcon" />
                                            <Form.Control
                                                type="text"
                                                placeholder="Username"
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                                isInvalid={touched.name && !!errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3 form-group relative" controlId="email">
                                            <FaRegEnvelope className="inputIcon" />
                                            <Form.Control
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={touched.email && !!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
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
                                        <div className={classes.check}>
                                            <Form.Group className="mb-3 d-flex" controlId="terms">
                                                <Form.Check type="checkbox" name="terms" className="me-2" required />
                                                <span>
                                                    I accept all the{" "}
                                                    <Link href="/terms">
                                                        <a className={classes.password}>terms & conditions</a>
                                                    </Link>{" "}
                                                    and{" "}
                                                    <Link href="/privacy">
                                                        <a className={classes.password}>privacy policy</a>
                                                    </Link>.
                                                </span>
                                            </Form.Group>
                                        </div>
                                        <Button type="submit" className="w-100" disabled={isSubmitting}>
                                            {isSubmitting ? "Signing Up..." : "Sign Up"}
                                        </Button>
                                        <div className={classes.or}>Or</div>
                                        <p className={classes.text}>Sign Up with</p>
                                        <div className="d-flex gap-3 justify-content-center">
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/Google.jpg" alt="Login with Google" />
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/AppleLogo.jpg" alt="Login with Apple" />
                                                </a>
                                            </Link>
                                            <Link href="#">
                                                <a>
                                                    <img src="/images/Facebook.jpg" alt="Login with Facebook" />
                                                </a>
                                            </Link>
                                        </div>
                                        <p className="pt-3">
                                            Already have an account?
                                            <Link href="/Auth/login">
                                                <a className={`ps-2 ${classes.password}`}>Log In</a>
                                            </Link>
                                        </p>
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

export default SignUp;




