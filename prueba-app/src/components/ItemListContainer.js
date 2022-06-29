import ItemList from './ItemList.js';
import './ItemListContainer.css';


function ItemListContainer({ greeting }) {
  return (
    <section className='Catalogo'>
      <h2>{greeting}</h2>
      <div className='List'>
        <ItemList />    
      </div>
    </section>
  );
}

export default ItemListContainer;
