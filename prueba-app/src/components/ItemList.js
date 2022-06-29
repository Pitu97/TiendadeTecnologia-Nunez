import Item from './Item.js';
import './ItemList.css';


function ItemList({item}) {  
  return (
    <><div>
        <h3>Catalogo de Productos</h3>
    </div>
    <div className='Cat'>
        {item && item.map(x => <Item nombre={x.nombre} precio={x.precio} stock={x.stock} />)}
    </div>
    </>
  );
}

export default ItemList;
