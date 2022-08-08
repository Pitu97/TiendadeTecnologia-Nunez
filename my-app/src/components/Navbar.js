import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import './Navbar.css';
import Brand from './imagenes/logo.png';

function Navbar() {
  return (
    <header className='navbar'>
        <Link className='Titulo' to='/'><div>
          <img className='brand' src={Brand} alt='logo' />
          <h3>MAMBATech</h3>
        </div></Link>
        <nav>
          <ul>
            <li><NavLink activeClass='active' to='/'>Home</NavLink></li>
            <li><NavLink activeClass='active' to='/category/mouse'>Mouses</NavLink></li>
            <li><NavLink activeClass='active' to='/category/auricular'>Auriculares</NavLink></li>
            <li><NavLink activeClass='active' to='/category/monitor'>Monitores</NavLink></li>
            <li><NavLink activeClass='active' to='/category/teclado'>Teclados</NavLink></li>
          </ul>         
        </nav>
        <Link className='Carrito' to='/cart'><CartWidget /></Link>
    </header>
  );
}

export default Navbar;
