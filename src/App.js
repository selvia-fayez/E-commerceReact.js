
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/Login" element = {<Login/>}></Route>
        <Route path="/Register" element = {<Register/>}></Route>
        <Route path="/Cart" element = {<Cart/>}></Route>
        <Route path="/Product" element = {<Product/>}></Route>
        <Route path="/ProductList" element = {<ProductList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
