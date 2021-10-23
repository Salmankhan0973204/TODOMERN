import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home" style={{ marginLeft: "1rem" }}>
          New Brand
        </Navbar.Brand>
        <Container></Container>
      </Navbar>
    </div>
  );
}
export default Header;
