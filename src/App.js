import './App.css';
import ShopWeb from './components/Containers/ShopWeb';
import Layout from './components/Theme/Layout'
import {BrowserRouter } from 'react-router-dom'

function App() {
  return (
      <Layout>
        <BrowserRouter>
          <ShopWeb/>
        </BrowserRouter>
      </Layout>
  );
}

export default App;
