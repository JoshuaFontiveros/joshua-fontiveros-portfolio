import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, ProgressBar, Row } from "react-bootstrap";
import "./About.css";
import Joshua from "../assets/joshua_photo.jpg";

const About = () => {
  const git = 95;
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
          <Container className="name">
            Hello, my name is Joshua Fontiveros.
          </Container>

          <Container className="details">
            Results driven web developer, seeking to use proven ReactJS with
            NodeJS skills to deliver coding excellence
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
              target="_blank"
            >
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
            <div className="img-about-paragraph-container">
              <div className="img-about">
                <img src={Joshua} alt="" />
              </div>
              <div
                style={{ marginTop: "10px" }}
                dangerouslySetInnerHTML={{
                  __html: `<p> <q>The advance of technology is based on making it fit in so that
                you don't really even notice it, so it's part of everyday life.</q>
                -- <strong>Bill Gates, co-founder of Microsoft. </strong> 
                <br/> 
                <br/>
                As a full-stack web
                developer, my job is to <strong>make advanced technology fit for
                people's everyday lives</strong>

           
                I do this by <strong>
                constantly improving my
                knowledge and skills by continuously creating functional full-stack
                applications. 
                </strong>
                <br/>
                <br/>
                During my study at <strong>Uplift Code Camp</strong>, I have honed
               <strong> strong analytical, logical, and programming skills </strong> that will
                serve me well in tech industry. For the past six months, I was
                able to gain expertise in full-stack web development by creating
                full-stack apps. I've created websites, game apps, restaurant
                apps, and sales and inventory systems in a given short amount of
                time. 
                <br/>
                <br/>
               
      
               
                You can
                view samples of my projects I learned in <strong>Uplift Code Camp</strong> in this portfolio
                to learn more about your expectations for your next front-end developer <strong>/</strong> full-stack
                developer, I would welcome the opportunity for personal
                interview. Thank you for your time, consideration, and
                forthcoming response.</p>`,
                }}
              ></div>
              <p className="about-paragraph"></p>
            </div>
          </Container>

          <Container className="progress-container  d-flex justify-content-center align-items-center">
            <h1 className="skills-text">Skills</h1>
            <Container fluid="sm" className="progress-details">
              <span>Git</span>
              <ProgressBar
                style={{ backgroundColor: "#F5F5F5" }}
                now={git}
                label={`${git}%`}
                variant="success"
              />
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
