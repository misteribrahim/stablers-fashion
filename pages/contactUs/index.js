import React from "react";
import classes from "./index.module.scss"
import ContactForm from "../../components/contactForm";
import MainLayout from "../../Layout/mainLayout";
import SecondaryBanner from "../../components/secondaryBanner";
import { Col, Container, Row } from "react-bootstrap";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";


function ContactUs() {
  const contactlist = [
    {
      icon: BsTelephone, 
      title: "Phone Number",
      detail: "+92 319 14 03056"
    },
    {
      icon: BsEnvelope, 
      title: "Email",
      detail: "info@stablersfashion.com"
    },
    {
      icon: BsGeoAlt, 
      title: "Location",
      detail: "United Kingdom"
    },
    {
      icon: BsGeoAlt, 
      title: "Service Availability",
      detail: "24 hours, 7 days a week"
    }
  ];
  return (
    <>
      <MainLayout>
        <SecondaryBanner
          img={"/images/contactbg.png"}
          title={"Contact Us"}
          desc={
            "If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form."
          }
        />
        <section className="pt-5">
          <Container>
          <Row >
              {contactlist.map((item, index) => (
                <Col key={index} lg={3} md={6} className="mb-3" >
                  <div className={classes.contactItem}>
                    <div className={classes.iconBox}>
                      {item.icon && <item.icon />} 
                    </div>
                    <div className={classes.textBox}>
                      <strong>{item.title}</strong>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
                <ContactForm />

          </Container>
        </section>
      </MainLayout>
    </>
  );
}

export default ContactUs;
