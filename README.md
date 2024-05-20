# GenerativeAI

GenerativeAI is a powerful full-stack application that leverages advanced language models to generate creative and coherent text based on user prompts. This project combines a React frontend with an Express backend to provide a seamless experience for users to interact with the AI model.


**<p align='center'>You can find the website live <a href="https://gemini-frontend.onrender.com">here</a></p>**


## Features

- **Text Generation**: Input a prompt and receive a generated text response.
- **User-Friendly Interface**: Simple and intuitive UI for easy interaction.
- **Real-Time Processing**: Fast and efficient text generation using state-of-the-art AI models.

## Technologies Used

- **Frontend**: React, Axios, HTML, CSS
- **Backend**: Node.js, Express, Google Generative AI API
- **Other**: dotenv, cors, body-parser

## Installation

1. **Clone the repository**:
    ```sh
    https://github.com/satyajit-patel/generativeAi.git
    cd generativeai
    ```

2. **Install dependencies**:

    **Backend**:
    ```sh
    cd backend
    npm install
    ```

    **Frontend**:
    ```sh
    cd ../frontend
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory with the following content:
    ```env
    API_KEY=your_google_generative_ai_api_key
    ```

## Usage

1. **Run the backend server**:
    ```sh
    cd backend
    node index.js
    ```

2. **Run the frontend development server**:
    ```sh
    cd ../frontend
    npm start
    ```

3. **Access the application**:
    Open your web browser and navigate to `http://localhost:3000`.

## API Endpoints

### Generate Text
- **URL**: `/generate-sonnet`
- **Method**: `POST`
- **Body Parameters**: 
    - `prompt` (string): The input text prompt for the AI to generate text.
- **Response**:
    - `sonnet` (string): The generated text response.

## Project Structure

```plaintext
generativeai/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── .env
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── ...
│
└── README.md


You can find the website live [here](https://gemini-frontend.onrender.com)