import React from 'react';
import classes from "./index.module.scss"
import { Container } from 'react-bootstrap';

const SecondaryBanner = ({ img, title, desc }) => {
  return (

     <div
      className={classes.otherBanner}
      style={{ backgroundImage: `url(${img})` }}
    >
      <Container>
          <h1>{title}</h1>
          {desc && <p>{desc}</p>} 
      </Container>
    </div>

  )
}

export default SecondaryBanner
