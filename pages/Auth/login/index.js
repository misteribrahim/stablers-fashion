// import React, { useState } from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { FaRegEnvelope } from "react-icons/fa";
// import { FiEyeOff, FiLock } from "react-icons/fi";
// import { IoEyeOutline } from "react-icons/io5";
// import Link from "next/link";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import classes from "../index.module.scss";
// import AuthLayout from "../../../Layout/authLayout";

// const Login = () => {
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
//   const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters long"),
//   });

//   return (
//     <AuthLayout>
//       <div className={classes.authHolder}>
//         <Row>
//           <Col md={6} className="pe-0">
//             <div className={`image-box ${classes.authImg}`} />
//           </Col>
//           <Col md={6} className="ps-0">
//             <div className={classes.authBox}>
//               <Formik
//                 initialValues={{ email: "", password: "" }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => console.log("Submitted values: ", values)}
//               >
//                 {({ handleSubmit, handleChange, values, touched, errors }) => (
//                   <Form className="auth-form" noValidate onSubmit={handleSubmit}>
//                     <div>
//                       <h2>Log In</h2>
//                       <p>Login to your account</p>
//                     </div>
//                     <Form.Group className="mb-3 form-group relative" controlId="email">
//                       <FaRegEnvelope className="inputIcon" />
//                       <Form.Control
//                         type="email"
//                         placeholder="Email Address"
//                         name="email"
//                         value={values.email}
//                         onChange={handleChange}
//                         isValid={touched.email && !errors.email}
//                         isInvalid={touched.email && !!errors.email}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.email}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <Form.Group className="mb-3 form-group relative" controlId="password">
//                       <FiLock className="inputIcon" />
//                       <Form.Control
//                         type={isPasswordVisible ? "text" : "password"}
//                         name="password"
//                         placeholder="New Password"
//                         onChange={handleChange}
//                         value={values.password}
//                         isInvalid={!!errors.password && touched.password}
//                       />
//                       {!(errors.password && touched.password) && (
//                         <span className={classes.eyeIcon} onClick={togglePasswordVisibility}>
//                           {isPasswordVisible ? <IoEyeOutline /> : <FiEyeOff />}
//                         </span>
//                       )}
//                       <Form.Control.Feedback type="invalid">
//                         {errors.password}
//                       </Form.Control.Feedback>
//                     </Form.Group>
//                     <div className={classes.check}>
//                       <span>
//                         <Form.Check
//                           type="checkbox"
//                           id="check"
//                           label="Remember me"
//                           className={classes.customCheckbox}
//                         />
//                       </span>
//                       <Link href="#">
//                         <a className={classes.password}>Forgot password?</a>
//                       </Link>
//                     </div>
//                     <Button type="submit" className="w-100">
//                       Log In
//                     </Button>
//                     <div className={classes.or}>Or</div>
//                     <p className={classes.text}>log in with</p>
//                     <div className="d-flex gap-3 justify-content-center">
//                       <Link href="#">
//                         <a>
//                           <img src="/images/Google.jpg" alt="Login with Google" />
//                         </a>
//                       </Link>
//                       <Link href="#">
//                         <a>
//                           <img src="/images/AppleLogo.jpg" alt="Login with Apple" />
//                         </a>
//                       </Link>
//                       <Link href="#">
//                         <a>
//                           <img src="/images/Facebook.jpg" alt="Login with Facebook" />
//                         </a>
//                       </Link>
//                     </div>
//                     <p className="pt-3">
//                       Didn’t have an account?
//                       <Link href="#">
//                         <a className={`ps-2 ${classes.password}`}>Create an account</a>
//                       </Link>
//                     </p>
//                   </Form>
//                 )}
//               </Formik>
//             </div>
//           </Col>
//         </Row>
//       </div>
//     </AuthLayout>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import { FiEyeOff, FiLock } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik } from "formik";
import classes from "../index.module.scss";
import AuthLayout from "../../../Layout/authLayout";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [formError, setFormError] = useState(null);
  
  // State to hold the email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  // Validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });

  // Handle login
  const handleLogin = async (values, { setSubmitting, resetForm }) => {
    setFormError(null);
    const requestBody = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
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
        console.log("Login Success:", data);
        // If remember me is checked, store email and password
        if (rememberMe) {
          localStorage.setItem("email", values.email);
          localStorage.setItem("password", values.password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }
        resetForm();
        router.push("/");
      } else {
        console.log("API error:", data);
        setFormError(data.message || "An error occurred during login.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setFormError("An error occurred during login. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Effect to load email and password from local storage
  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail) {
      setEmail(savedEmail);
    }
    if (savedPassword) {
      setPassword(savedPassword);
    }
  }, []);

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
                initialValues={{ email: email, password: password }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
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
                      <h2>Log In</h2>
                      <p>Login to your account</p>
                    </div>
                    {formError && (
                      <div className="alert alert-danger">{formError}</div>
                    )}
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
                        placeholder="Password"
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
                    <div className={classes.check}>
                      <span>
                        <Form.Check
                          type="checkbox"
                          id="check"
                          label="Remember me"
                          className={classes.customCheckbox}
                          checked={rememberMe}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                      </span>
                      <Link href="/Auth/forgetpassword">
                        <a className={classes.password}>Forgot password?</a>
                      </Link>
                    </div>
                    <Button type="submit" className="w-100" disabled={isSubmitting}>
                      {isSubmitting ? "Logging In..." : "Log In"}
                    </Button>
                    <div className={classes.or}>Or</div>
                    <p className={classes.text}>Log in with</p>
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
                      Don't have an account?
                      <Link href="/Auth/signUp">
                        <a className={`ps-2 ${classes.password}`}>Create an account</a>
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

export default Login;


