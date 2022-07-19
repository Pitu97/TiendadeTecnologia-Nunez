import Imagen from './imagenes/carrito.png';
import './CartWidget.css';

function CartWidget() {
    return (
      <>
        <img src={Imagen} alt="carrito" />
      </>
    );
  }
  
  export default CartWidget;