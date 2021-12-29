import React from "react";
import { ProgressBar, Container, Row, Button } from "react-bootstrap";

import "./Projects123.css";
import project1 from "../assets/czyrahs_pizza.png";
import project2 from "../assets/pera-o-kahon.png";
import project3 from "../assets/Pokedex.png";
import project4 from "../assets/to-do-list.png";
// import project5 from "../assets/czyrahs_pizza.png";
import project6 from "../assets/snack-stop.png";
import group_project from "../assets/tiny.png";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Projects = () => {
  const project_1 = 100;
  const project_2 = 100;
  const project_3 = 100;
  const project_4 = 100;
  const project_5 = 90;
  const project_6 = 80;
  const project_7 = 90;

  return (
    <React.Fragment>
      <Sidebar />
      <div className="projects ">
        <Container className="project-details-container ">
          <Container className=" d-flex justify-content-center flex-column align-items-center">
            <h1>Projects</h1>
          </Container>
        </Container>
        <Container className="main-progress-container">
          <Container className="progress-container black">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
            <span>Czyrah's Pizza Static Website</span>
            <ProgressBar
              className="progress-bar"
              variant="success"
              now={project_1}
              label={`${project_1}%`}
              style={{ backgroundColor: "white" }}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <a
                href="https://czyrahs-pizza.herokuapp.com/"
                rel="noreferrer"
                target="_blank"
                disabled
              >
                <Button
                  variant="outline-light"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Website
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
            </Container>
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
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="progress-container white">
            <Row className="project-preview">
              <img src={project2} alt="" />
            </Row>
            <span>Pera O Kahon JavaScript Game</span>
            <ProgressBar
              className="progress-bar white"
              variant="success"
              now={project_2}
              label={`${project_2}%`}
              style={{ backgroundColor: "black" }}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <a
                href="https://pera-o-kahon.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-dark"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Website
                </Button>
              </a>
              <a
                href="https://github.com/JoshuaFontiveros/pera-o-kahon"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-dark"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Github
                </Button>
              </a>
            </Container>
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
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="progress-container black">
            <Row className="project-preview">
              <img src={project3} alt="" />
            </Row>
            <span>Pokedex ReactJS App</span>
            <ProgressBar
              className="progress-bar"
              variant="success"
              now={project_3}
              label={`${project_3}%`}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <a
                href="https://joshua-f-pokedex.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-light"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Website
                </Button>
              </a>
              <a
                href="https://github.com/JoshuaFontiveros/pokedex"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-light"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Github
                </Button>
              </a>
            </Container>
          </Container>
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
          <Container className="progress-container white">
            <Row className="project-preview">
              <img src={project4} alt="" />
            </Row>
            <span>To-do ReactJS App</span>
            <ProgressBar
              className="progress-bar white"
              variant="success"
              now={project_4}
              label={`${project_4}%`}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <a
                href="https://to-do-list-joshua-f.herokuapp.com/PendingTasks"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-dark"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Website
                </Button>
              </a>
              <a
                href="https://github.com/JoshuaFontiveros/to-do-list-react-app"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline-dark"
                  className="view-button"
                  style={{ margin: "10px 0 10px 0" }}
                >
                  Github
                </Button>
              </a>
            </Container>
          </Container>
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
          <Container className="progress-container black">
            <Row className="project-preview">
              {/* <img src={project5} alt="" /> */}

              <p style={{ height: "190px" }}>In Progress</p>
            </Row>
            <span>Restaurant App ReactJS App</span>
            <ProgressBar
              className="progress-bar"
              animated
              variant="success"
              now={project_5}
              label={`${project_5}%`}
              style={{ backgroundColor: "#fff" }}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <Button
                variant="outline-light"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
                disabled
              >
                Website
              </Button>
              <Button
                variant="outline-light"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
                disabled
              >
                Github
              </Button>
            </Container>
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
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
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
            <Container className="btn-container d-flex justify-content-evenly">
              <Button
                variant="outline-dark"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
                onClick={() => alert("To be deployed soon!")}
              >
                Website
              </Button>
              <Button
                variant="outline-dark"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
              >
                Github
              </Button>
            </Container>
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
          <Container className="empty-container empty">
            <Row className="project-preview">
              <img src={project1} alt="" />
            </Row>
          </Container>
          <Container className="progress-container black">
            <Row className="project-preview">
              <img src={group_project} alt="" />
            </Row>
            <span>Project Tiny</span>
            <ProgressBar
              className="progress-bar"
              animated
              variant="success"
              now={project_7}
              label={`${project_7}%`}
              style={{ backgroundColor: "#fff" }}
            />
            <Container className="btn-container d-flex justify-content-evenly">
              <Button
                variant="outline-light"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
                onClick={() => alert("To be deployed soon!")}
              >
                Website
              </Button>
              <Button
                variant="outline-light"
                className="view-button"
                style={{ margin: "10px 0 10px 0" }}
                onClick={() => alert("To be deployed soon!")}
              >
                Github
              </Button>
            </Container>
          </Container>
        </Container>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
