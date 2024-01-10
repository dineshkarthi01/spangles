
import './App.css';
import ProductBilling from './components/ProductBilling';
import ProductCart from './components/ProductCart';
import ProductDetails from './components/ProductDetails';

function App() {


  return (
    <div className="App">
       <ProductDetails />
       <ProductCart />
       <ProductBilling />
    </div>
  );
}

export default App;
