import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';


function Navbar() {
  return (
    <header className='navbar'>
        <h3>MAMBA</h3>
        <nav>
          <ul>
            <li><NavLink activeClass='active' to='/'>Home</NavLink></li>
            <li></li><NavLink activeClass='active' to='/item'>Productos</NavLink>
          </ul>         
        </nav>
        <CartWidget />
    </header>
  );
}

export default Navbar;
