import './App.css';
import Haeder from './components/navbar/Haeder';
import SlideShow from './components/SlideShow/SlideShow';
import ProductsSliders from './components/ProductsSlider/ProductsSliders';
import AllProducts from './components/AllProducts/AllProducts';

function App() {
  return (
    <div >
      <Haeder/>
      <SlideShow/>
      <ProductsSliders/>
      <AllProducts/>
    </div>
  );
}

export default App;
