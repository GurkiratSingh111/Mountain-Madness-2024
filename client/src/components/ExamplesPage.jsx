import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'
import Footer from './Footer'

import badLeafImage1 from '../assets/Bad_leaf1.png'; // Import the image file


const ExamplesPage = () => {

    const containerStyle = {
        backgroundColor: '#f2f2f2', // Light grey background for the entire section
        // padding: '20px', // Adjust padding as needed
    };

    const textContainerStyle = {
        paddingLeft: '20px', // Left padding
        paddingRight: '20px', // Right padding
        marginBottom: '30px', // Bottom margin
      };
    


    return (
        <div>
            <div style={containerStyle}>
                <Navbar />
                <div style={textContainerStyle}>
                    <h3>Our AI Model</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consectetur, quam sed aliquam vehicula,
                        velit dolor volutpat urna, ut euismod libero neque nec ante. Nulla facilisi. Integer volutpat turpis id
                        nunc pretium, ut luctus nisi tincidunt.
                    </p>
                    <p>
                        Possible outputs expected from different input images include:
                        <ul>
                            <li>Output 1</li>
                            <li>Output 2</li>
                            <li>Output 3</li>
                            {/* Add more possible outputs as needed */}
                        </ul>
                    </p>
                </div>
                <Container>
                    <Row>
                        {/* First Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={badLeafImage1} alt="Bad Leaf 1" />
                                <Card.Body>
                                    <Card.Title>Card Title 1</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={badLeafImage1} alt="Bad Leaf 2" />
                                <Card.Body>
                                    <Card.Title>Card Title 2</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={badLeafImage1} alt="Bad Leaf 3" />
                                <Card.Body>
                                    <Card.Title>Card Title 3</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <Footer />
            </div>
        </div>
    )
}

export default ExamplesPage
