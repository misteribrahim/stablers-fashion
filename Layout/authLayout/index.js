import React from "react";
import classes from "./index.module.scss";
import { Container } from "react-bootstrap";

const AuthLayout = ({ children }) => {
  return (
    <div className={classes.authWrapper}>
      <Container>
        {children}
      </Container>
    </div>
  );
};

export default AuthLayout;