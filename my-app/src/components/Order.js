import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Order.css';

function Order() {
    const base = getFirestore();

    const { cart, totalQ, totalP, clear } = useContext(CartContext);

    const [newName, setName] = useState("");
    const [newEmail, setEmail] = useState("");
    const [newPhone, setPhone] = useState("");

    const [orderId, setOrderId] = useState("");
    const [comprado, setComprado] = useState(false);

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const emailHandler = (event) => {
        setEmail(event.target.value)
    }
    const phoneHandler = (event) => {
        setPhone(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newBuyer = {
            name: newName,
            email: newEmail,
            phone: newPhone
        }
        
        const order = {
            buyer: newBuyer,
            items: cart,
            total: totalP,
            date: Date()
        }

        const ordersCollection = collection(base, "orders")

        addDoc(ordersCollection, order).then((doc) => setOrderId(doc.id))

        setEmail("");
        setName("");
        setPhone("");
        clear();
        setComprado(true);
    }

    return (
        <>
        <h2>ORDEN DE COMPRA</h2>
        <div className='order'>
            {!comprado && <><div className='bloques'><ul>
                {cart && cart.map(e => <li>
                    <div className='item'>
                        <p>Producto: {e.item.nombre}</p>
                        <p>Cant: {e.quantity}</p>
                        <p>Precio: ${e.price}</p>
                    </div>
                    </li>)}
            </ul>
            <p>Cant. total de productos: {totalQ}</p>
            <p>Precio total: ${totalP}</p>
            </div>
            <div className='bloques'>
            <form onSubmit={submitHandler} className='formulario'>
                <label>Nombre</label>
                <input type='text' placeholder='nombre' value={newName} onChange={nameHandler}/>
                <label>Correo</label>
                <input type='email' placeholder='correo'value={newEmail} onChange={emailHandler}/>
                <label>Telefono</label>
                <input type='number' placeholder='telefono'value={newPhone} onChange={phoneHandler}/>
                <button type='submit'>Enviar</button>
            </form></div></>}
            {comprado && <div><h2>Gracias por su compra!</h2>
                <h3>COMPRA FINALIZADA</h3>
                <p>Nro de orden: {orderId}</p>
                <Link to="/"><button className='btn'>Volver</button></Link></div>}
        </div></>
    );
}

export default Order;