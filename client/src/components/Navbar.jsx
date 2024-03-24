import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

function Navibar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="/" className=' px-5'>Home</Nav.Link>
              <Nav.Link href="/about" className=' px-5'>About</Nav.Link>
              <Nav.Link href="/examples" className=' px-5'>Examples</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default Navibar;
