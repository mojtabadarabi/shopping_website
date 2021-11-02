import './App.css';
import ShopWeb from './components/Containers/ShopWeb';
import Layout from './components/Theme/Layout'
import {BrowserRouter } from 'react-router-dom'
import ContextProvider, { useContextActions,useContextValue } from './context/ContextProvider';
import { useEffect } from 'react';
import { getAllProducts } from './Services/products';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useContextActions()
  const state = useContextValue()

  return (
    <ContextProvider>
      <Layout>
        <BrowserRouter>
          <ShopWeb/>
          <ToastContainer />
        </BrowserRouter>
      </Layout>
    </ContextProvider>
  );
}

export default App;
