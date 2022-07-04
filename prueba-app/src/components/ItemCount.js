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
    if(stock !== 0 && num <= stock) {
      console.log(num);
    }
  }

  return (
    <><div className="Counter">
      <button onClick={resta} className="Botones">-</button>
      <p>{num}</p>
      <button onClick={suma} className="Botones">+</button>
    </div><button onClick={onAdd} className="Agregar">Agregar al Carrito</button></>
  );
}

export default ItemCount;
