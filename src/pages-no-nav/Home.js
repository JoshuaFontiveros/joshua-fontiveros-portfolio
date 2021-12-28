import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import About from "./AboutNo";

import ProjectsNo from "../pages-no-nav/ProjectsNo";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Sidebar />
      <About />
      <ProjectsNo />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
