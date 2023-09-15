# Netflix Clone with React.js and Redux Toolkit
![Netflix Clone] ![image](https://github.com/Achalj14/Netflix-Clone/assets/93928078/2c46ce27-8dcf-4f38-8fd5-949f92d22712)

This project is a Netflix clone built using React.js and Redux Toolkit. It's designed to replicate the Netflix user interface and features.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)


## Demo

You can see a live demo of the project [here](https://netflix-b3513.web.app/profile).

## Features

- **User Authentication**: Users can create accounts, log in, and log out.
- **Netflix Originals**: Display a list of Netflix Originals.
- **Trending Now**: Display a list of trending movies and TV shows.
- **Top Rated**: Display a list of top-rated movies and TV shows.
- **Action Movies**: Display a list of action movies and TV shows.
- **Comedy Movies**:Display a list of comedy movies and TV shows.
- **Horror Movies**:Display a list of Horror movies and TV shows.
- **Romance Movies**:Display a list of Romance movies and TV shows.
- **Documentries Movies**:Display a list of documentries movies and TV shows.
- **Responsive Design**: The UI is responsive and works well on various screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/netflix-clone.git
   1.Change into the project directory:
    cd netflix-clone
   2.Install dependencies:
     npm install
## Usage
1.Create a Firebase project and set up Firebase Authentication.

2.Add your Firebase configuration in a firebase.js file inside the src directory.

    ```bash
      // src/firebase.js

      import firebase from "firebase";

     const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    const auth = firebase.auth();

    export { auth };
3.Create a Firebase project and set up Firebase Authentication.
    npm start
4.Open your browser and go to http://localhost:3000.

