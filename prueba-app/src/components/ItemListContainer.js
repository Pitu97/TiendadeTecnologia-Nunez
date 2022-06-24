import './ItemListContainer.css';
import Card from './Card.js';


function ItemListContainer() {
  return (
    <div className="List">
        <h2>Catalogo de productos</h2>
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
  );
}

export default ItemListContainer;
