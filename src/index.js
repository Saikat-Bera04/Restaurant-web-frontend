import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css'; 
 import './components/styles.css'; // Make sure this imports App.css
import App from './App';
import Test from './Test';
// ... keep rest same but render <Test /> instead of <App />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);