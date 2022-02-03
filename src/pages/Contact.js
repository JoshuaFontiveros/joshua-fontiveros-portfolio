import React, { useState, useRef } from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { Container, Overlay, Tooltip } from "react-bootstrap";
import "./Contact.css";
const Contact = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [showDiscord, setShowDiscord] = useState(false);
  const email = useRef(null);
  const whatsapp = useRef(null);
  const discord = useRef(null);

  const [showModal, setShowModal] = useState(false);

  const closeEmailHandler = () => {
    setShowEmail(!showEmail);
    setShowWhatsApp(false);
    setShowDiscord(false);
  };
  const closeWhatsAppHandler = () => {
    setShowEmail(false);
    setShowWhatsApp(!showWhatsApp);
    setShowDiscord(false);
  };
  const closeDiscordHandler = () => {
    setShowEmail(false);
    setShowWhatsApp(false);
    setShowDiscord(!showDiscord);
  };

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
              <span ref={email} onClick={closeEmailHandler}>
                Email
              </span>
            </div>
            <Overlay target={email} show={showEmail} placement="right">
              <Tooltip>fontiveros.joshua@gmail.com</Tooltip>
            </Overlay>

            <div>
              <span ref={whatsapp} onClick={closeWhatsAppHandler}>
                Whatsapp
              </span>
            </div>
            <Overlay target={whatsapp} show={showWhatsApp} placement="right">
              <Tooltip>WhatsApp No: +639060239252</Tooltip>
            </Overlay>
            <div>
              <a
                href="https://join.skype.com/invite/QoHuF5WpbDzf"
                target="_blank"
                rel="noreferrer"
              >
                Skype
              </a>
            </div>

            <div>
              <span ref={discord} onClick={closeDiscordHandler}>
                Discord
              </span>
            </div>
            <Overlay target={discord} show={showDiscord} placement="right">
              <Tooltip>Discord Email: fontiveros.joshua@gmail.com</Tooltip>
            </Overlay>
          </div>

          <p className="left-arrow">&#8592;</p>
        </Container>
      </Container>
      <div className="div-footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Contact;
