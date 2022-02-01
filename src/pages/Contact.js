import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Container, div, Form, Button } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <Container className="contact-container ">
        <div>Contact</div>
        <p className="down-arrow">&#8595;</p>
        <Container className="contact ">
          <div className="contact-details-container">
            <div>
              <a
                href="https://www.facebook.com/FFFonti/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/FFFonti/"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/FFFonti/"
                target="_blank"
                rel="noreferrer"
              >
                Whatsapp
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/FFFonti/"
                target="_blank"
                rel="noreferrer"
              >
                Skype
              </a>
            </div>

            <div>
              <a
                href="https://www.facebook.com/FFFonti/"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
            </div>
          </div>

          <p className="left-arrow">&#8592;</p>

          {/* <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer"
            >
              Email
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer"
            >
              Skype
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer"
            >
              Whatsapp
            </a>
          </div>
          <div>
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=VpCqJWHTclXwSdsBzvcKJVgfwKnVlzqjlTwgPFHmVpmMMWxmBlNwDJlHpKPmjJlHXtFgpZl"
              target="_blank"
              rel="noreferrer"
            >
              Skype
            </a>
          </div> */}
        </Container>
      </Container>
      <div className="div-footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
