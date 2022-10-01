import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
  apiKey: "AIzaSyAqV5NQZfid5c3KXCBD3k-Ek6iV14l1lT8",
  authDomain: "mangascoder.firebaseapp.com",
  projectId: "mangascoder",
  storageBucket: "mangascoder.appspot.com",
  messagingSenderId: "498007161598",
  appId: "1:498007161598:web:90d91ce5ec5662027b43af"
};

initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
