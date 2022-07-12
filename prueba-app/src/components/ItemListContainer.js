import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import datos from '../components/data/datos';


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const {id} = useParams();
  //console.log(id);

  const getCategory = () => {
    const promiseData = new Promise((resolve,reject) => {
      resolve(datos)
      //console.log(datos);
      })
      .then((data) => {
        switch(parseInt(id)) {
          case 1:
            setInfo(data.filter((i) => i.categoria === "Mouse"));
            break;
          case 2:
            setInfo(data.filter((i) => i.categoria === "Auricular"));
            break;
          case 3:
            setInfo(data.filter((i) => i.categoria === "Monitor"));
            break;
          case 4:
            setInfo(data.filter((i) => i.categoria === "Teclado"));
            break;
          default:
            setInfo(data)
            break;           
          }
      })
  }

  useEffect(() =>{
    setTimeout(()=>{getCategory();},2000)
  }, [id])

  //console.log(info)

  return (
    <>
      <div className='List'>
        <ItemList items={info}/>    
      </div>
    </>
  );
}

export default ItemListContainer;

//   fetch('datos.json')                                    
    //   .then((resp) => resp.json())                           
    //   .then((data) => setTimeout(()=>{setInfo(data)}, 2000)) 
