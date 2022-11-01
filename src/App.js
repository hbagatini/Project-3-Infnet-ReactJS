import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetails/ProductDetails';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
 
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/:id" element={<Checkout />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
