# Mountain-Madness-2024

# Plantify

Plantify is a web application that uses an AI model to detect the health conditions of plants based on leaf images. Users can upload photos of plant leaves or capture images using their device's camera, and the AI model will analyze them to determine whether the plant is healthy or shows signs of disease.

## Tech Stack

- **AI Model**: Python, Tensorflow, Keras => Convolutional Neural Networks (CNN)
- **Backend Logic**: Node.js, Express.js
- **Frontend**: React (JavaScript), Tailwind CSS

## Features

- Upload images of plant leaves to check their health status.
- AI model analyzes the images and provides a report on the plant's condition.
- User-friendly interface with responsive design using React and Tailwind CSS.
- Secure and scalable backend powered by Flask and SQLAlchemy.

## Plant Condition Detection Model

The TensorFlow model was designed to accurately classify the condition of plant leaves into one of three categories: Healthy, Powdery, and Rusty. The model utilized a dataset sourced from Kaggle (https://www.kaggle.com/datasets/rashikrahmanpritom/plant-disease-recognition-dataset). The dataset contains 1530 images divided into training, testing, and validation sets, with each set containing images labeled as Healthy, Powdery, or Rust. The model is built using the Keras API in TensorFlow and follows a sequential architecture. It consists of the following layers:

- **Conv2D Layer**: 32 filters, 3x3 kernel size, relu activation
- **MaxPooling2D Layer**
- **Conv2D Layer**: 64 filters, 3x3 kernel size
- **MaxPooling2D Layer**
- **Flatten Layer**
- **Dense Layer**: 64 units, relu activation
- **Dense Layer**: 3 units (one per class), softmax activation

Training Accuracy: 90.02%
Validation Accuracy: 88.33%

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GurkiratSingh111/Mountain-Madness-2024.git

2. Install dependencies for frontend:
   ```bash
   cd ../client
   npm install

## Usage

1. Start the backend server:
   ```bash
    cd ../backend_express
    npm install
   node server.js

2. Start the frontend development server:
   ```bash
    cd ../client
    npm run dev

3. Open your browser and navigate to http://localhost:5173 to use the application.

## Members

- [M Parsaei](https://github.com/M-Parsaei)
- [Gurkirat Singh](https://github.com/GurkiratSingh111)
- [Barun Gambhir](https://github.com/barunGambhir)
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
