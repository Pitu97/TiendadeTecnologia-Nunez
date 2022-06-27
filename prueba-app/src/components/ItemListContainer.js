import './ItemListContainer.css';
import ItemCount from './ItemCount.js';


function ItemListContainer({ greeting }) {
  return (
    <div>
        <h2>{greeting}</h2>
        <h3>Catalogo de productos</h3>
        <div className="List">
          <ItemCount stock="20" initial="1"/>
          <ItemCount stock="15" initial="1"/>
          <ItemCount stock="30" initial="1"/>
          <ItemCount stock="0" initial="1"/>
        </div>
    </div>
  );
}

export default ItemListContainer;
