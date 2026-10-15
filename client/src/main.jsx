import ReactDOM from 'react-dom/client';
import React from 'react';

// Importing BrowserRouter from react-router-dom to enable routing in the application
import { BrowserRouter } from 'react-router-dom';

// Importing the main App component and the stylesheet
import App from './App.jsx';
import './index.css';

// Rendering the root of the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode highlights potential problems in the application and helps with debugging
  <React.StrictMode>
    {/* BrowserRouter enables routing functionality in the application */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
