import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';
import logo from '../assets/leaf2.jpg';

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
              <Nav.Link href="/examples" className=' px-5'>Our AI Model</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ width: '100%', height: '60vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <img src={logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={titleStyle}>Plantify</div>
      </div>
      <br />
    </>
  );
}

const imageContainerStyle = {
    width: '100%',
    height: '50vh',
    overflow: 'hidden',
    position: 'relative',
  };
  
  const titleStyle = {
    overflow: 'hidden',
    marginTop: '-30vh',
    transform: 'translate(0%, -50%)',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', 
    textAlign: 'center', 
    fontSize: '105px',

    boxShadow:
    '0 4px 0 rgba(192, 192, 192, 0.5), 0 -4px 0 rgba(192, 192, 192, 0.5), 4px 0 0 rgba(192, 192, 192, 0.5), -4px 0 0 rgba(192, 192, 192, 0.5)',
    '@media (maxWidth: 768px)': {
        fontSize: '36px',
        boxShadow: 'none', 
    },

  };

export default Navibar;
