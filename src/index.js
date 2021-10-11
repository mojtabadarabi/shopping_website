import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextProvider from './context/ContextProvider';
import Layout from './components/Theme/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <App />
    ,
  document.getElementById('root')
);

