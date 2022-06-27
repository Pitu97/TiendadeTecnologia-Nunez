import CartWidget from './CartWidget';
import './Navbar.css';


function Navbar() {
  return (
    <header className='navbar'>
        <h3>MAMBA</h3>
        <a href='#'><button>Inicio</button></a>
        <a href='#'>Nosotros</a>
        <a href='#'>Productos</a>
        <CartWidget />
    </header>
  );
}

export default Navbar;
