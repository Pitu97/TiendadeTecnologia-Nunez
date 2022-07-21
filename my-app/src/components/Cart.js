import './Cart.css';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, removeItem, clear, totalQ, totalP } = useContext(CartContext);


    return (
        <div className='Cart'>
            <h2>Carrito de compras</h2>
            <ul>
                {cart && cart.map(e => <li>
                    <p>{e.item.nombre}</p>
                    <p>${e.item.precio}</p>
                    <p>{e.quantity}</p>
                    <button onClick={() => removeItem(e.item.id)}>Eliminar</button>
                    </li>)}
            </ul>
            <p>Cant. total de productos: {totalQ}</p>
            <p>Precio total: ${totalP}</p>
            <button onClick={clear}>Limpiar carrito</button> 
        </div>
    );
}

export default Cart;