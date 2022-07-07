import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const {id} = useParams();
    console.log(id);
    const getItem = () => {
        fetch('data.json')
        .then((data) => {
          //const i = data.filter(item => item.id !== parseInt(id))
          //setDetail(i) 
          console.log(data.json());
        })
    }

    useEffect(() => {
      getItem();
    },[])
  
    return (
      <>
        <div className='ItemDetail'>
          <ItemDetail item={detail} />    
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer;