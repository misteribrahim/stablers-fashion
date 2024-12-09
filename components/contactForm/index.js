import { Button, Col, Container, Form, Row } from "react-bootstrap";
import classes from "./index.module.scss";

const ContactForm = () => {
  return (
    <>
      <section style={{ padding: "100px 0" }}>
        <Container>
          <Form className="contactform">
            <div className={classes.title}>
              <h3>CONTACT FORM</h3>
              <p>Contact us with the form given below, a member of our team will come back to you as soon as possible</p>
            </div>
            <Row>
              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Control placeholder="Name" type="text" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Control placeholder="Email" type="email" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Control placeholder="Phone Number" type="tel" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="form-group">
                  <Form.Control placeholder="Order Number" type="tel" />
                </Form.Group>
              </Col>
              <Col lg={12}>
                <Form.Group className="form-group">
                  <Form.Control placeholder="Subject" type="text" />
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
              </Col>
            </Row>
            <Button type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </section>
    </>
  );
}
export default ContactForm;