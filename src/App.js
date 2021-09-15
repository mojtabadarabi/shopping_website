import './App.css';
import Haeder from './components/navbar/Haeder';
import SlideShow from './components/SlideShow/SlideShow';
import ProductsSliders from './components/ProductsSlider/ProductsSliders';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

function App() {
  return (
    <div >
      <Haeder/>
      <SlideShow/>
      <ProductsSliders/>
      <FeaturedProducts/>
    </div>
  );
}

export default App;
