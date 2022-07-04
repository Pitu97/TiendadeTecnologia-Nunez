import './Item.css';
import ItemCount from './ItemCount';


function Item(props) {
  return (
    <div className='Card'>
    <h4>{props.nombre}</h4>
    <p className='Datos'>{props.precio}</p>
    <p className='Datos'>Stock = {props.stock}</p>
    <button className='Detalle'>Ver Mas</button>
    <ItemCount stock={props.stock} initial={1} />
    </div>
  );
}

export default Item;