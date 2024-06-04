import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
<Nav.Link as={Link} to="/about">
  About
</Nav.Link>;

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand to="/home">
            <b>Game-Unite</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/list">
                List
              </Nav.Link>{" "}
              <Nav.Link as={Link} to="/CreateBlog">
                Create New Blog
              </Nav.Link>
              <NavDropdown title="User">
                <NavDropdown.Item as={Link} to="/logout">
                  LogOut
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
