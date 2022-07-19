import './ItemDetail.css';
import ItemCount from './ItemCount';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ItemDetail({item}) {
  //const [count, setCount] = useState("")
  const [added, setAdded] = useState(false)
  const { addItem } = useContext(CartContext);

  const Add =(num) => {
    if(item.stock !== 0 && num <= item.stock) {
      //setCount(parseInt(num))
      setAdded(true);
      addItem(item, num);   
    }
  }

  // useEffect(() => {
  //   console.log(count);
  // },[count])

  return (
    <>
      <div className='Det'>        
        <div className='text'>
          <h2>{item.nombre}</h2>
          <p>{item.precio}</p>
          <p>{item.descripcion}</p>
          <p>Stock: {item.stock}</p>
          <div className='botones'>
            {/* {!added && <Link to="/cart"><button className='boton'>Comprar</button></Link>} */}
            {added && <Link to="/cart"><button className='boton2'>Terminar Compra</button></Link>}
            {!added && <ItemCount stock={item.stock} initial={1} onAdd={Add}/>}
            {added && <p>Producto agregado al carrito!</p>}
          </div>
        </div>
        <img src={item.img} atl="imagen" />
      </div>
    </>
  );
}

export default ItemDetail;

{/* {items && items.map(item => (<>
                                            <div className='text'>
                                              <h2>{item.nombre}</h2>
                                              <p>{item.precio}</p>
                                              <p>{item.descripcion}</p>
                                              <p>Stock: {item.stock}</p>
                                              <div className='botones'>
                                                <button className='boton'>Comprar</button>
                                                <ItemCount stock={item.stock} initial={1} onAdd={Add}/>
                                              </div>
                                            </div>
                                            <img src={item.img} atl="imagen" />
                                          </>))} */}