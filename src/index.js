import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { createRoot} from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);


reportWebVitals();
