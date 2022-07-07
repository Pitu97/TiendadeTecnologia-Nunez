import Item from './Item.js';
import './ItemList.css';


function ItemList({items}) {  
  return (
    <><div>
        <h3>Catalogo de Productos</h3>
    </div>
    <div className='Cat'>
        {items && items.map(item => <Item nombre={item.nombre} precio={item.precio} stock={item.stock} id={item.id} />)}
    </div>
    </>
  );
}

export default ItemList;
