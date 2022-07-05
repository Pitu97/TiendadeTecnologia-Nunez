import { useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';

function ItemDetailContainer() {
    const [detail, setDetail] = useState([])

    const getItem = () => {
        fetch('data.json')
        .then((response) => {return response.json()})
        .then((data) => setTimeout(()=>{setDetail(data)}, 2000))
    }
  
    return (
      <section className='Detalle'>
        <div className='ItemDetail'>
          <button onClick={getItem}>Ver Detalle</button>  
          <ItemDetail items={detail} />    
        </div>
      </section>
    );
  }
  
  export default ItemDetailContainer;