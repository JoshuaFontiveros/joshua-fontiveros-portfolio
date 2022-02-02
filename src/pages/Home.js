import React from "react";
import Sidebar from "../components/Sidebar";
import About from "./About";
import ProjectsNo from "../pages-no-nav/ProjectsNo";

const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <About />
      <ProjectsNo />
    </React.Fragment>
  );
};

export default Home;
