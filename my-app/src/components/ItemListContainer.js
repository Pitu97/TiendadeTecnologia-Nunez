import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
//import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
import datos from '../components/data/datos';


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const {cat} = useParams();
  //console.log(id);

  const getCategory = () => {
    const promiseData = new Promise((resolve,reject) => {
      resolve(datos)
      //console.log(datos);
      })
      .then((data) => {
        switch(cat) {
          case 'mouse':
            setInfo(data.filter((i) => i.categoria === "Mouse"));
            break;
          case 'auricular':
            setInfo(data.filter((i) => i.categoria === "Auricular"));
            break;
          case 'monitor':
            setInfo(data.filter((i) => i.categoria === "Monitor"));
            break;
          case 'teclado':
            setInfo(data.filter((i) => i.categoria === "Teclado"));
            break;
          default:
            setInfo(data)
            break;           
          }
      })
  }

  useEffect(() =>{
    setTimeout(()=>{getCategory();},1000)
  }, [cat])

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
