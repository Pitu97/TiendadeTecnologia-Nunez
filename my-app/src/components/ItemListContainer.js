import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from 'firebase/firestore';
//import datos from '../components/data/datos';


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const {cat} = useParams();
  //const [data, setData] = useState([])
  //const [idItem, setIdItem] = useState("");
  const base = getFirestore();
  //console.log(id);

  

  //  const isInData = (id) => {
  //    const q = collection(base, "items");
  //      getDocs(q).then((items) => {
  //        const copy = items.docs.map((doc) => doc.data());
  //      return (copy.find((e) => e.id === id))
  //      })
  //  }
    
  // useEffect(() => { 
  //   const q = collection(base, "items");
  //   const promiseData = new Promise((resolve,reject) => {
  //        resolve(datos)
  //        }).then((dat) => setData(dat))
  //    data.forEach((item) => {
  //    //console.log(!isInData(item.id)) //CAMBIAR FILTRO 
  //    if(!isInData(item.id)) {
  //      addDoc(q, item).then((doc) => setIdItem(doc.id));
  //    }
  //  })   
  //  }, [data])  

  useEffect(() => {
    const q = collection(base, "items"); 
    getDocs(q).then((items) => {
        const i = items.docs.map((doc) => doc.data());
        switch(cat) {
          case "mouse":
            setInfo(i.filter((a) => a.categoria.toLowerCase() === "mouse"));
            break;
          case "auricular":
            setInfo(i.filter((a) => a.categoria.toLowerCase() === "auricular"));
            break;
          case "monitor":
            setInfo(i.filter((a) => a.categoria.toLowerCase() === "monitor"));
            break;
          case "teclado":
            setInfo(i.filter((a) => a.categoria.toLowerCase() === "teclado"));
            break;
          default:
            setInfo(i);
            break;           
          } 
    })
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
