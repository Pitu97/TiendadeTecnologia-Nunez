import './Item.css';
import ItemCount from './ItemCount';


function Item(props) {
  const Add =(num) => {
    if(props.stock !== 0 && num <= props.stock) {
      console.log(num);
    }
  }

  return (
    <div className='Card'>
    <h4>{props.nombre}</h4>
    <p className='Datos'>{props.precio}</p>
    <p className='Datos'>Stock = {props.stock}</p>
    <button className='Detalle'>Ver Mas</button>
    <ItemCount stock={props.stock} initial={1} onAdd={Add}/>
    </div>
  );
}

export default Item;