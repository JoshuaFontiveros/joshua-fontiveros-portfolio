import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { Container, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Container className="contact-container ">
        <Row>Contact</Row>
        <Container className="contact ">
          <Row>
            <a
              href="https://www.facebook.com/FFFonti/"
              target="_blank"
              rel="noreferrer">
              Facebook
            </a>
          </Row>
          <Row>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer">
              Email
            </a>
          </Row>
        </Container>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
