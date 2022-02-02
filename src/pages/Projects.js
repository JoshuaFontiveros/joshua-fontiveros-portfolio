import React, { useState, useEffect } from "react";
import {
  ProgressBar,
  Container,
  Row,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useLocation, Route, Routes } from "react-router-dom";
import "./Projects.css";
import project1 from "../assets/czyrahs_pizza.png";
import project2 from "../assets/pera-o-kahon.png";
import project3 from "../assets/Pokedex.png";
import project4 from "../assets/to-do-list.png";
import project5 from "../assets/resto-app.png";
import project6 from "../assets/snack-stop.png";
import group_project from "../assets/tiny.png";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Projects = () => {
  const project_1 = 100;
  const project_2 = 100;
  const project_3 = 100;
  const project_4 = 100;
  const project_5 = 100;
  const project_6 = 70;
  const project_7 = 100;

  return (
    <React.Fragment>
      <Sidebar />
      <div className="projects ">
        <Container className="project-details-container ">
          <Container className=" d-flex justify-content-center flex-column align-items-center project-h1">
            <h1>Projects</h1>
          </Container>
        </Container>
        <Container className="main-progress-container">
          <OverlayTrigger
            placement="top"
            delay={{ show: 50, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This is Static Website written in HTML, CSS, and Bootstrap
              </Tooltip>
            }
          >
            <Container className="progress-container black">
              <Row className="project-preview">
                <img src={project1} alt="" />
              </Row>
              <span>Czyrah's Pizza Static Website</span>

              <ProgressBar
                className="progress-bar"
                animated
                variant="success"
                now={project_1}
                label={`${project_1}%`}
                style={{ backgroundColor: "white" }}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a>
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                    onClick={() => alert("To be re-deployed soon. ")}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/czyrahs-pizza"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This is a JavaScript game made with HTML, CSS, and JavaScript
              </Tooltip>
            }
          >
            <Container className="progress-container white">
              <Row className="project-preview">
                <img src={project2} alt="" />
              </Row>
              <span>Pera O Kahon JavaScript Game</span>

              <ProgressBar
                className="progress-bar white"
                animated
                variant="success"
                now={project_2}
                label={`${project_2}%`}
                style={{ backgroundColor: "black" }}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a
                  href="https://pera-o-kahon.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/pera-o-kahon"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This is an app made from ReactJS, using React and React-Redux.
                The goal of this project is to learn and do dynamic filtering
                using useParams
              </Tooltip>
            }
          >
            <Container className="progress-container black">
              <Row className="project-preview">
                <img src={project3} alt="" />
              </Row>
              <span>Pokedex React App</span>

              <ProgressBar
                className="progress-bar"
                variant="success"
                now={project_3}
                label={`${project_3}%`}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a
                  href="https://joshua-f-pokedex.herokuapp.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/pokedex"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This app is made from ReactJS. Using React and React-Redux. The
                goal of this project is to learn and practice filtering data to
                another component.
              </Tooltip>
            }
          >
            <Container className="progress-container white">
              <Row className="project-preview">
                <img src={project4} alt="" />
              </Row>
              <span>To-do React App</span>

              <ProgressBar
                className="progress-bar white"
                variant="success"
                now={project_4}
                label={`${project_4}%`}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a
                  href="https://to-do-list-joshua-f.herokuapp.com/AddTask"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/to-do-list-react-app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This app is made from ReactJS. Using React and React-Redux. It
                has the basic CRUD functions.
              </Tooltip>
            }
          >
            <Container className="progress-container black">
              <Row className="project-preview">
                <img src={project5} alt="" />
              </Row>
              <span>Restaurant App React App</span>

              <ProgressBar
                className="progress-bar"
                animated
                variant="success"
                now={project_5}
                label={`${project_5}%`}
                style={{ backgroundColor: "#fff" }}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a
                  href="https://resto-app-joshuaf.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/resto-app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                This is a full-stack web app using MERN Stack. It has the basic
                CRUD functionalities
              </Tooltip>
            }
          >
            <Container className="progress-container white">
              <Row className="project-preview">
                <img src={project6} alt="" />
              </Row>
              <span>SnackStop Sales & Inventory System Full-Stack App</span>

              <ProgressBar
                className="progress-bar white"
                animated
                variant="success"
                now={project_6}
                label={`${project_6}%`}
                style={{ backgroundColor: "rgb(0,0,0)" }}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a>
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    onClick={() => alert(`To be deployed soon!`)}
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/JoshuaFontiveros/resto-app"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-dark"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <OverlayTrigger
            placement="top"
            delay={{ show: 300, hide: 500 }}
            overlay={
              <Tooltip>
                {" "}
                Tiny <br />A combination of blog and social media apps for
                people who enjoy influencing others with their sparkling ideas,
                and learners who love reading. This app is a full-stack app
                using MERN Stack developed by 5 developers in two weeks
                time-frame.
              </Tooltip>
            }
          >
            <Container className="progress-container black">
              <Row className="project-preview">
                <img src={group_project} alt="" />
              </Row>
              <span>Project Tiny</span>
              <ProgressBar
                className="progress-bar"
                variant="success"
                now={project_7}
                label={`${project_7}%`}
                style={{ backgroundColor: "#fff" }}
              />
              <div
                className="d-flex justify-content-evenly"
                style={{ width: "100%" }}
              >
                <a
                  href="https://tiny-ph.herokuapp.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 5px" }}
                  >
                    Live Demo
                  </Button>
                </a>
                <a
                  href="https://github.com/jll24/tiny-client"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github FE
                  </Button>
                </a>
                <a
                  href="https://github.com/jll24/tiny-server"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Button
                    variant="outline-light"
                    className="view-button"
                    style={{ margin: "10px 0 10px 0" }}
                  >
                    Github BE
                  </Button>
                </a>
              </div>
            </Container>
          </OverlayTrigger>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
