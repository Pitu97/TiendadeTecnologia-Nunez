import { Link } from 'react-router-dom';
import './Item.css';
import ItemCount from './ItemCount';


function Item(props) {
  const Add =(num) => {
    if(props.stock !== 0 && num <= props.stock) {
      console.log(num);
    }
  }
  console.log(props);
  return (
    <div className='Card'>
    <h4>{props.nombre}</h4>
    <p className='Datos'>{props.precio}</p>
    <p className='Datos'>Stock = {props.stock}</p>
    <Link to={`/item/${props.id}`}><button className='Detalle'>Ver Mas</button></Link>
    <ItemCount stock={props.stock} initial={1} onAdd={Add}/>
    </div>
  );
}

export default Item;