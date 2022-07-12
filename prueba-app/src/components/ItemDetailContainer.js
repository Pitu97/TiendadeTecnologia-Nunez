import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import datos from '../components/data/datos';

function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const {idItem} = useParams();
    //console.log(idItem);

    const getItem = () => {
        const promiseData = new Promise((resolve,reject) => {
        resolve(datos)
        })
        .then((data) => setDetail(data.find((i) => i.id === parseInt(idItem))));
        // .then((data) => {const i = data && data.find(item => item.id === 7)
        //   setDetail(i)
        //   console.log(i)})
        //.then((data) => {
          //const i = data && data.filter(item => item.id === id)
          //console.log(i);
          //setDetail(i) 
       // })
    }

    useEffect(() => {
      setTimeout(()=>{getItem();},2000)
    },[])
    //console.log(detail);
    return (
      <>
        <div className='ItemDetail'>
          <ItemDetail item={detail} />     
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer; 