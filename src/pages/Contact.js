import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import { Container, Row } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Container className="contact-container  ">
        <Row>Contact</Row>
        <Container className="contact ">
          <Row className="">
            <a
              href="https://www.facebook.com/FFFonti/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </Row>
          <Row className="">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </Row>
        </Container>
      </Container>
      <div className="position-fixed">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
