import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD8BQeokP7-ABK7Ie-wmpfCgoZVtIW7IKk",
  authDomain: "caferacer-82c0b.firebaseapp.com",
  projectId: "caferacer-82c0b",
  storageBucket: "caferacer-82c0b.appspot.com",
  messagingSenderId: "625063870593",
  appId: "1:625063870593:web:b7ab6ede40f64c8c3ecd80",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
