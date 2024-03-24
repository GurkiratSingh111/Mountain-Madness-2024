import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar'
import Footer from './Footer'

import rust from '../assets/Bad_leaf1.png'; // Import the image file
import healthy from '../assets/Healthy_leaf.png';
import powdery from '../assets/Powdery_leaf.png';


const ExamplesPage = () => {

    const containerStyle = {
        backgroundColor: '#f2f2f2', // Light grey background for the entire section
        // padding: '20px', // Adjust padding as needed
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
        <div>
            <div style={containerStyle}>
                <Navbar />
                <div style={aboutSectionStyle}>
                    <h2 style={aboutHeadingStyle}>Our AI Model</h2>
                </div>
                <Container>
                    <Card style={cardStyle}>
                        <Card.Body>
                            <Card.Title>What does it do?</Card.Title>
                            <Card.Text>
                            Our AI model built with TensorFlow and Keras using Convolutional Neural Networks (CNN) to classify plant leaf conditions. The AI model is designed to accurately classify the condition of plant leaves into one of three categories: Healthy, Powdery, and Rusty. It leverages the TensorFlow framework with the Keras API for deep learning implementation, specifically utilizing Convolutional Neural Networks (CNN) for image classification tasks.
                            <br />
                            <br />
                            The dataset used to train and evaluate the model was sourced from Kaggle and can be found at this link: Plant Disease Recognition Dataset. This dataset comprises a total of 1530 images, which are divided into training, testing, and validation sets. Each image in the dataset is labeled with one of the three categories: <b>Healthy</b>, <b>Powdery</b>, or <b>Rust</b>. An example of each of these category is listed below:
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Row>
                        {/* First Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={rust} alt="Rusty Leaf" />
                                <Card.Body>
                                    <Card.Title>Leaf Condition - Rust</Card.Title>
                                    <Card.Text>
                                    The TensorFlow AI model predicted this condition due to the reddish-brown spots/patches on leaves, reduced chlorophyll, necrosis, and leaf defoliation.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Second Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={healthy} alt="Healthy Leaf" />
                                <Card.Body>
                                    <Card.Title>Leaf Condition - Healthy</Card.Title>
                                    <Card.Text>
                                    The TensorFlow AI model predicted this condition due to the vibrant green color, uniform leaf surface, absence of spots, and optimal photosynthetic activity.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        {/* Third Card */}
                        <Col md={4}>
                            <Card>
                                <Card.Img variant="top" src={powdery} alt="Powdery Leaf" />
                                <Card.Body>
                                    <Card.Title>Leaf Condition - Powdery</Card.Title>
                                    <Card.Text>
                                        The TensorFlow AI model predicted this condition due to the white powdery fungal growth on leaf surfaces, leaf curling, yellowing, and reduced photosynthesis.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <br />
                <br />
                <br />

                <Footer />
            </div>
        </div>
    )
}

export default ExamplesPage
