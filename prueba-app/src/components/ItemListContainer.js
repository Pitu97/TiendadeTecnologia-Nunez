import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';


function ItemListContainer() {
  const [info, setInfo] = useState([])

  useEffect(() =>{
    fetch('datos.json')
    .then((resp) => resp.json())
    .then((data) => setTimeout(()=>{setInfo(data)}, 2000))
  }, [])
console.log(info)

  return (
    <>
      <div className='List'>
        <ItemList items={info}/>    
      </div>
    </>
  );
}

export default ItemListContainer;
