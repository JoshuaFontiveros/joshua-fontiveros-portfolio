import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";

import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Sidebar = (props) => {
  const [sidebar, setSideBar] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  // Test test
  const showSideBar = () => setSideBar(!sidebar);
  return (
    <React.Fragment>
      <div className="sidebar ">
        <Link to="#" className="menu-bars">
          <FontAwesomeIcon icon={faBars} onClick={showSideBar} />
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu "}>
          <ul className="nav-menu-items" onClick={showSideBar}>
            <Container className="li-container d-flex flex-column flex-wrap justify-content-evenly align-items-center ">
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <FontAwesomeIcon icon={faTimes} />
                </Link>
              </li>
              <li className="name ">
                <a
                  href="https://www.facebook.com/FFFonti/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Joshua Fontiveros
                </a>
              </li>
              {loading && SidebarData.path === "/"
                ? null
                : SidebarData.map((item, index) => {
                    return (
                      <li key={index} className={`${item.cName} `}>
                        <Link
                          to={item.path}
                          onClick={() => window.scroll(0, 0)}
                        >
                          <span>{item.title}</span>
                        </Link>{" "}
                      </li>
                    );
                  })}
              <li className="nav-text">
                {" "}
                <a
                  href="https://github.com/JoshuaFontiveros"
                  rel="noreferrer"
                  target="_blank"
                  className="nav-items-topbar"
                >
                  <span>Github</span>
                </a>
              </li>
              <li className="nav-text ">
                {" "}
                <a
                  href="https://www.linkedin.com/in/joshua-fontiveros-49a608159/"
                  rel="noreferrer"
                  target="_blank"
                  className="nav-items-topbar"
                >
                  <span>Linkedin</span>
                </a>
              </li>
            </Container>
          </ul>
        </nav>
        <Nav
          className={sidebar ? null : "nav-topbar"}
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          {loading && SidebarData.path === "/"
            ? null
            : SidebarData.map((item, index) => {
                return (
                  <Nav.Item as="li" key={index} className="list-data">
                    <Link
                      to={item.path}
                      className="nav-items-topbar"
                      onClick={() => window.scroll(0, 0)}
                    >
                      <span>{item.title}</span>
                    </Link>{" "}
                  </Nav.Item>
                );
              })}
          <span className="name-topbar">
            <a
              href="https://www.facebook.com/FFFonti/"
              target="_blank"
              rel="noreferrer"
            >
              Joshua Fontiveros
            </a>
          </span>
          <Nav.Item as="li" className="list-data">
            <a
              href="https://github.com/JoshuaFontiveros"
              rel="noreferrer"
              target="_blank"
              className="nav-items-topbar"
            >
              <span>Github</span>
            </a>
          </Nav.Item>
          <Nav.Item as="li" className="list-data">
            <a
              href="https://www.linkedin.com/in/joshua-fontiveros-49a608159/"
              rel="noreferrer"
              target="_blank"
              className="nav-items-topbar"
            >
              <span>Linkedin</span>
            </a>
          </Nav.Item>
        </Nav>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
