import CartWidget from './CartWidget';
import './Navbar.css';


function Navbar() {
  return (
    <header className='navbar'>
        <h3>MAMBA</h3>
        <button>Inicio</button>
        <a src='#'>Nosotros</a>
        <a scr='#'>Productos</a>
        <CartWidget />
    </header>
  );
}

export default Navbar;
