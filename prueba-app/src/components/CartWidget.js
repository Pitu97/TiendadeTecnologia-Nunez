import Imagen from './imagenes/carrito.png';
import './CartWidget.css';

function CartWidget() {
    return (
      <a><img src={Imagen} alt="carrito" /></a>
    );
  }
  
  export default CartWidget;