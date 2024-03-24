import React from 'react';
import { Card, Container, ListGroup } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
import Navbar from "./Navbar"
import Footer from './Footer';

const AboutPage = () => {
  const containerStyle = {
    backgroundColor: '#f2f2f2', 
  };

  const cardStyle = {
    marginBottom: '20px', 
  };

  const aboutSectionStyle = {
    padding: '50px 20px',
  };

  const aboutHeadingStyle = {
    fontSize: '36px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };

  
  return (
    <div style={containerStyle}>
      <Navbar />
      <div style={aboutSectionStyle}>
        <h2 style={aboutHeadingStyle}>About Us</h2>
      </div>

      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Mission and Vision</Card.Title>
            <Card.Text>
              Our mission is to to revolutionize plant care and agriculture practices through innovative AI technology, empowering individuals and industries to make informed decisions for healthier and sustainable plant ecosystems.
              <br />
              Our vision is to create a world where every plant's health is monitored and optimized with precision, fostering a greener planet and ensuring food security for future generations. We strive to be the leading solution in plant health diagnostics and contribute to a sustainable future for all
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>Our Team</Card.Title>
            <Card.Text>
              
            </Card.Text>

            <ListGroup variant="flush">
              {/* Team Member 1 */}
              <ListGroup.Item>
                <strong>M Parsaei</strong>
                <br />
                BSc. Computer Science and Mathematics
                <span style={{ float: 'right' }}>
                  <a href="https://www.linkedin.com/in/mparsaei/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://github.com/M-Parsaei" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
              </ListGroup.Item>

              {/* Team Member 2 */}
              <ListGroup.Item>
                <strong>Gurkirat Singh Arora</strong>
                <br />
                BSc. Computer Science
                <span style={{ float: 'right' }}>
                  <a href="https://www.linkedin.com/in/gurkiratsingharora/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://github.com/GurkiratSingh111" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
              </ListGroup.Item>

              {/* Team Member 3 */}
              <ListGroup.Item>
                <strong>Barun Gambhir</strong>
                <br />
                BSc. Computer Science
                <span style={{ float: 'right' }}>
                  <a href="https://www.linkedin.com/in/barunGambhir/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin style={{ marginRight: '10px' }} />
                  </a>
                  <a href="https://github.com/barunGambhir" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </span>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </div>
  );
};

export default AboutPage;
