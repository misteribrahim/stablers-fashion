// import React from "react";
// import { Button, Col, Form, Row } from "react-bootstrap";
// import { FaRegEnvelope } from "react-icons/fa";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import classes from "../index.module.scss";
// import AuthLayout from "../../../Layout/authLayout";

// const ForgetPassword = () => {
//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email address").required("Email is required"),
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
//                 initialValues={{ email: "" }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values) => console.log("Submitted values: ", values)}
//               >
//                 {({ handleSubmit, handleChange, values, touched, errors }) => (
//                   <Form className="auth-form" noValidate onSubmit={handleSubmit}>
//                     <div>
//                       <h2>Forget Password</h2>
//                       <p>Enter your email address</p>
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
//                     <Button type="submit" className="w-100">
//                       Submit
//                     </Button>
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

// export default ForgetPassword;


import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { FaRegEnvelope } from "react-icons/fa";
import * as Yup from "yup";
import { Formik } from "formik";
import classes from "../index.module.scss";
import AuthLayout from "../../../Layout/authLayout";

const ForgetPassword = () => {
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const handleForgotPassword = async (values, { setSubmitting }) => {
    setFormError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("A reset password link has been sent to your email.");
        // Automatically clear the success message after 5 seconds
        setTimeout(() => setSuccessMessage(null), 5000);
      } else {
        setFormError(data.message || "An error occurred while processing your request.");
      }
    } catch (error) {
      setFormError("A network error occurred. Please try again later.");
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
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleForgotPassword}
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
                      <h2>Forget Password</h2>
                      <p>Enter your email address</p>
                    </div>
                    {formError && <div className="alert alert-danger">{formError}</div>}
                    {successMessage && (
                      <div className="alert alert-success">{successMessage}</div>
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
                    <Button type="submit" className="w-100" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
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

export default ForgetPassword;
