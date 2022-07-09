import Item from './Item.js';
import './ItemList.css';


function ItemList({items}) {  
  return (
    <><div>
        <h3 className='categoria'>Catalogo de Productos</h3>
    </div>
    <div className='Cat'>
        {items && items.map(item => <Item img2={item.img2} nombre={item.nombre} precio={item.precio} stock={item.stock} id={item.id} />)}
    </div>
    </>
  );
}

export default ItemList;
