import { useEffect, useState } from 'react';
import Item from './Item.js';
import './ItemList.css';


function ItemList() {

  const [info, setInfo] = useState([])

  useEffect(() =>{
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setTimeout(()=>{setInfo(data)}, 2000))
  }, [])
    
  return (
    <><div>
        <h3>Catalogo de Productos</h3>
    </div>
    <div className='Cat'>
        {info && info.map(item => <Item nombre={item.nombre} precio={item.precio} stock={item.stock} />)}
    </div>
    </>
  );
}

export default ItemList;
