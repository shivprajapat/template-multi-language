import React from "react";
import Language from "./language";
import { FormattedMessage } from "react-intl";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FormattedMessage id="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">
              <FormattedMessage id="home" />
            </Nav.Link>
            <Nav.Link href="#link">
              <FormattedMessage id="about" />
            </Nav.Link>
            <Nav.Link>
              <Language />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
