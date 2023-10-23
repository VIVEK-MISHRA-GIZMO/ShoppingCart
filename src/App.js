
import './App.css';
import { Routes, Route ,BrowserRouter as Router } from "react-router-dom"
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Shopkart from './components/context/Shopkart';

function App() {
  return (
<Shopkart>
    <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/Cart' element={<Cart/>}/>
  
    </Routes>
    </Router>
    </Shopkart>
  );
}

export default App;
