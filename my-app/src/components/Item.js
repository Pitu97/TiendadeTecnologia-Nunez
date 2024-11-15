import { Link } from 'react-router-dom';
import './Item.css';


function Item(props) {
  //console.log(props); 
  return (
    <div className='Card'>
      <div>
        <img src={props.img2} alt="imagen" />  
        <h4>{props.nombre}</h4>
      </div>
      <div>
        <p className='Datos'>${props.precio}</p>
        <p className='Datos'>Stock = {props.stock}</p>
      </div>
      <div>
        <Link to={`/item/${props.id}`}><button className='Detalle'>Ver Mas</button></Link>
      </div>
    </div>
  );
}

export default Item;