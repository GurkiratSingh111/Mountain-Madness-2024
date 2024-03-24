import React from 'react'
import { Card, Container } from 'react-bootstrap';
import Camera from './Camera'
import Navbar from "./Navbar"
import Footer from './Footer'

const HomePage = () => {

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
        <h2 style={aboutHeadingStyle}>Welcome to Plantify</h2>
      </div>
      <Container>
        <Card style={cardStyle}>
          <Card.Body>
            <Card.Title>How to use Plantify</Card.Title>
            <Card.Text>
              Its Simple. Just click the button below to upload a photo of a plant leaf or simply take a photo using your device. Our AI model handles the rest.
              <br />
              Learn more about Plantify <a href="/about" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>, or about our AI model <a href="/examples" style={{ color: 'blue', textDecoration: 'underline' }}>here</a>.
              </Card.Text>
          </Card.Body>
        </Card>
        <Card style={cardStyle}>
          <Card.Body>
          <Camera />
          </Card.Body>
        </Card>
        </Container>
        <Footer />
    </div>
  )
}

export default HomePage
