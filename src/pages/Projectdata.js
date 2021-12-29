import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks, faHome } from "@fortawesome/free-solid-svg-icons";

export const Projectdata = [
  {
    title: "Home",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <FontAwesomeIcon icon={faTasks} />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faTasks} />,
    cName: "nav-text",
  },
];
