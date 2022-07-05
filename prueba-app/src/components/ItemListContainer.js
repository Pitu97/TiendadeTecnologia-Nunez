import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';


function ItemListContainer({ greeting }) {
  const [info, setInfo] = useState([])

  useEffect(() =>{
    fetch('data.json')
    .then((resp) => resp.json())
    .then((data) => setTimeout(()=>{setInfo(data)}, 2000))
  }, [])

  return (
    <>
      <h2>{greeting}</h2>
      <div className='List'>
        <ItemList items={info}/>    
      </div>
    </>
  );
}

export default ItemListContainer;
