import React from "react";
import { FormattedMessage } from "react-intl";
import { Container, Nav, Navbar } from "react-bootstrap";
import Language from "./language";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <FormattedMessage id="logo" />
        </Navbar.Brand>
        <Nav className="gap-2 flex-row">
          <Nav.Link href="#home">
            <FormattedMessage id="home" />
          </Nav.Link>
          <Nav.Link href="#about">
            <FormattedMessage id="about" />
          </Nav.Link>
          <Nav.Link>
            <Language />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
