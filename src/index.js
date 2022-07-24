import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import '@csstools/normalize.css';

const element = (
  <Router>
    <App />
  </Router>
);

const container = document.getElementById('root');

ReactDOM.render(element, container);
