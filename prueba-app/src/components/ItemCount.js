import { useState } from 'react';
import './ItemCount.css';


function ItemCount({ stock, initial }) {
  const [ num, setNum ] = useState(initial)

  const suma = () => {
    if(num < stock) {
      setNum(num + 1);
    } 
  }
  
  const resta = () => {
    if(num > 1) {
      setNum(num - 1);
    }
  }
  const onAdd =() => {
    if(stock != 0 && num < stock) {
      console.log(num);
    }
  }

  return (
    <div className="Card">
        <h4>Nombre</h4>
        <p>stock={stock}</p>
        <div className="Counter">
          <button onClick={resta}>-</button>
          <p>{num}</p>
          <button onClick={suma}>+</button>
        </div>
        <button onClick={onAdd}>Agregar al Carrito</button>
    </div>
  );
}

export default ItemCount;
