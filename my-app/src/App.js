import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar.js';
import NotFound from './components/NotFound';
import Order from './components/Order';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Navbar />
        <div className='Catalogo'>
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:cat" element={<ItemListContainer />}></Route> 
            <Route path="/item/:idItem" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
