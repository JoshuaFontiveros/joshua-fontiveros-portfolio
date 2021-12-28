import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, ProgressBar, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  const html = 90;
  const css = 85;
  const bootstrap = 89;
  const javascript = 88;
  const reactJS = 83;
  const expressJS = 85;
  const mongoDB = 80;

  return (
    <React.Fragment>
      <div className="about ">
        <Container className="details-container ">
          <Container className="about-h1 d-flex justify-content-center flex-column align-items-center">
            <h1>About</h1>
          </Container>
          <Container className="name">
            <h2>Hello, my name is Joshua Fontiveros.</h2>
          </Container>
        </Container>
        <Container className="details-container ">
          <Container className="d-flex justify-content-center flex-wrap">
            <h3>I am a full-stack web developer using these tech stack: </h3>
          </Container>
        </Container>
        {/* <Container className="merc-desc "> */}
        <Container className="mern-description ">
          <Container className="main-logo-container  ">
            <Row className="M  ">MongoDB</Row>
          </Container>
          <Container className=" main-logo-container ">
            <Row className="E ">ExpressJS</Row>
          </Container>
          <Container className=" main-logo-container ">
            <Row className="R">ReactJS</Row>
          </Container>
          <Container className=" main-logo-container ">
            <Row className="N">NodeJS</Row>
          </Container>
        </Container>

        <Container className="mern-text-description d-flex justify-content-evenly">
          <span className="d-flex align-items-center">
            <a
              href="https://www.geeksforgeeks.org/mern-stack/"
              rel="noreferrer"
              target="_blank">
              What is MERN Stack?
            </a>
          </span>{" "}
          <Link to="/projects" className="project-link">
            <Button variant="outline-dark">View my work</Button>
          </Link>
        </Container>

        <Container className="skills-container ">
          <Container className="about-me ">
            <h1 className="">About</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo officiis ipsam expedita. Labore, error
              deleniti accusantium quis unde cupiditate nobis magni expedita
              aliquid sed esse temporibus perferendis fuga quae? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Exercitationem illo
              officiis ipsam expedita. Labore, error deleniti accusantium quis
              unde cupiditate nobis magni expedita aliquid sed esse temporibus
              perferendis fuga quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Exercitationem illo officiis ipsam expedita.
              Labore, error deleniti accusantium quis unde cupiditate nobis
              magni expedita aliquid sed esse temporibus perferendis fuga quae?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem illo officiis ipsam expedita. Labore, error
              deleniti accusantium quis unde cupiditate nobis magni expedita
              aliquid sed esse temporibus perferendis fuga quae? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Exercitationem illo
              officiis ipsam expedita. Labore, error deleniti accusantium quis
              unde cupiditate nobis magni expedita aliquid sed esse temporibus
              perferendis fuga quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Exercitationem illo officiis ipsam expedita.
              Labore, error deleniti accusantium quis unde cupiditate nobis
              magni expedita aliquid sed esse temporibus perferendis fuga quae?
              aliquid sed esse temporibus perferendis fuga quae? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Exercitationem illo
              officiis ipsam expedita. Labore, error deleniti accusantium quis
              unde cupiditate nobis magni expedita aliquid sed esse temporibus
              perferendis fuga quae? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Exercitationem illo
            </p>
          </Container>

          <Container className="progress-container  d-flex justify-content-center align-items-center">
            <h1 className="skills-text">Skills</h1>
            <Container fluid="sm" className="progress-details">
              <span>HTML</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={html}
                label={`${html}%`}
                variant="success"
              />
              <span>CSS</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={css}
                label={`${css}%`}
                variant="success"
              />
              <span>Bootstrap</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={bootstrap}
                label={`${bootstrap}%`}
                variant="success"
              />
              <span>JavaScript</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={javascript}
                label={`${javascript}%`}
                variant="success"
              />
              <span>ReactJS</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={reactJS}
                label={`${reactJS}%`}
                variant="success"
              />
              <span>ExpressJS</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={expressJS}
                label={`${expressJS}%`}
                variant="success"
              />
              <span>MongoDB</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={mongoDB}
                label={`${mongoDB}%`}
                variant="success"
              />
            </Container>
          </Container>
        </Container>
        {/* </Container> */}
      </div>
    </React.Fragment>
  );
};

export default About;
