import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const y = new Date();
  let year = y.getFullYear();

  function winScroll() {
    window.scroll(0, 0);
  }
  return (
    <React.Fragment>
      <div className="footer ">
        <Container className=" quick-links ">
          <Row>Quick Links</Row>
          <Row>
            <Link to="/" onClick={winScroll}>
              Home
            </Link>
          </Row>
          <Row>
            <Link to="/" onClick={winScroll}>
              About
            </Link>
          </Row>
          <Row>
            <Link to="/projects" onClick={winScroll}>
              Projects
            </Link>
          </Row>
          <Row>
            <Link to="/contact" onClick={winScroll}>
              Contact
            </Link>
          </Row>
        </Container>
        <Container className="profile-list ">
          <Row>Profiles</Row>
          <Row>
            <a
              href="https://www.linkedin.com/in/joshua-fontiveros-49a608159/"
              target="_blank"
              rel="noreferrer">
              Linkedin
            </a>
          </Row>
          <Row>
            <a
              href="https://github.com/JoshuaFontiveros"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </Row>
          <Row>
            <a
              href="https://drive.google.com/file/d/1hJAV76Q-6tC1ZyIkkl3cXcX87wwGmHZA/view?usp=sharing"
              target="_blank"
              rel="noreferrer">
              Resume
            </a>
          </Row>
        </Container>
        <Container className="services ">
          <Row>Services</Row>
          <Row>Web Development</Row>
          <Row>Virtual Assistance</Row>
        </Container>
      </div>
      <div className="author">
        <Row>Joshua Fontiveros &copy; {year} | Images from freepik</Row>
      </div>
    </React.Fragment>
  );
};

export default Footer;
