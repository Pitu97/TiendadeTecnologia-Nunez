import Imagen from './imagenes/carrito.png';
import './CartWidget.css';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

function CartWidget() {
    const {totalQ} = useContext(CartContext);
    const [added, setAdded] = useState(false);

    useEffect(() => {
      if(totalQ > 0) {
      setAdded(true);
      }
      else {
        setAdded(false);
      }
    },[totalQ]);

    

    return (
      <div className="widget">
        <img src={Imagen} alt="carrito" />
        {added && <p>{totalQ}</p>}
      </div>
    );
  }
  
  export default CartWidget;