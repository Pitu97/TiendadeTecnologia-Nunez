import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    console.log(id);

    const getItem = () => {
      fetch('data.json')
      .then((response) => {return response.json()})
      .then((data) => {const i = data && data.filter(item => item.id === 3)
        setDetail(i)
        console.log(i)})
        //.then((data) => {
          //const i = data && data.filter(item => item.id === id)
          //console.log(i);
          //setDetail(i) 
       // })
    }

    useEffect(() => {
      getItem(); 
    },[])

    return (
      <>
        <div className='ItemDetail'>
          <ItemDetail items={detail} id={id} />    
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer;