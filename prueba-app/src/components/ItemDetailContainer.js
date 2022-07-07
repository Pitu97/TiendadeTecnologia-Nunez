import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const {id} = useParams();
    console.log(id);
    const getItem = () => {
      fetch('./data.json')
    .then((resp) => resp.json())
   .then((data) => setDetail(data[0]))
        //fetch('data.json')
        //.then((resp) => resp.json()) 
        //.then((data) => {
          //const i = data.find(item => item.id == parseInt(id))
          //console.log(i);
          //setDetail(i) 
       // })
    }

    //useEffect(() => {
      //getItem(); 
      //fetch('data.json')
      //.then((resp) => resp.json())
      //.then((data) => console.log(data))
     //.then((res) => setDetail(res))
    //},[])
    useEffect( () =>{
      fetch("data.json")
          .then(resp => resp.json())
          .then(res => setDetail(res))
}, [] );
  console.log(detail);
    return (
      <>
        <div className='ItemDetail'>
          <ItemDetail item={detail} />    
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer;