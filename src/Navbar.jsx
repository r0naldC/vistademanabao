import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-scroll";

import imgLogo from "./resources/images/vm_logo.PNG";
import "./Navbar.css";

import SocialMediaBanner from "./SocialMediaBanner.jsx";

const navbarStyles = {
  backgroundColor: "#525D4C",
  padding: "24px 16px",
};

const brandStyles = {
  maxWidth: "150px",
};

export default function CustomNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={navbarStyles}
      variant="dark"
      id="my-nav-bar"
    >
      <Container fluid>
        <Navbar.Brand style={brandStyles}>
          <Image
            fluid
            bsPrefix="img"
            src={imgLogo}
            style={{"width": "90%"}}
            alt="Vista De Manabao"
            title="Vista De Manabao"
          ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
          <Nav>
            <Link
              className="navbar-link"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Inicio
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              duration={500}
            >
              Proyecto
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="manabao"
              spy={true}
              smooth={true}
              duration={500}
            >
              Manabao
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="activities"
              spy={true}
              smooth={true}
              duration={500}
            >
              Actividades
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>

            <SocialMediaBanner />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
