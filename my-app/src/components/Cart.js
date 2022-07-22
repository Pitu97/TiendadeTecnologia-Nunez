import './Cart.css';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cart, removeItem, clear, totalQ, totalP } = useContext(CartContext);

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
        <>
        {added && <div className='Cart'>
            <h2>Carrito de compras</h2>
            <div className="head">
                <p>Nombre</p>
                <p>Cantidad</p>
                <p>Precio</p>
            </div>
            <ul>
                {cart && cart.map(e => <li>
                    <img src={e.item.img2} alt="imagen" />
                    <div className="datos">
                        <p>{e.item.nombre}</p>
                        <p>{e.quantity}</p>
                        <p>${e.price}</p>
                    </div>
                    <button onClick={() => removeItem(e.item.id)}>Eliminar</button>
                    </li>)}
            </ul>
            <p>Cant. total de productos: {totalQ}</p>
            <p>Precio total: ${totalP}</p>
            <div className="botones3">
                <button onClick={clear}>Limpiar carrito</button>
                <button>Comprar</button> 
            </div> 
        </div>}
        {!added && <div className="Cart">
                        <h2>Tu carrito de compras esta vacio</h2>
                        <h3>Agrega productos para comprar!</h3>
                        <Link to="/"><button>Volver al inicio</button></Link>
                    </div>}
        </>
    );
}

export default Cart;