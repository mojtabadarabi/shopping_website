import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContext from './AppContext';
import ContextProvider from './context/ContextProvider';
import Layout from './components/Theme/Layout';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <AppContext />
    ,
  document.getElementById('root')
);

