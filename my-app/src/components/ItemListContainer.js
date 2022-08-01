import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


function ItemListContainer() {
  const [info, setInfo] = useState([])
  const {id} = useParams();
  //console.log(id);

  useEffect(() => {
    
    const base = getFirestore();

    const q = collection(base, "items");

    getDocs(q).then((items) => {
        const i = items.docs.map((doc) => doc.data());
        switch(parseInt(id)) {
          case 1:
            setInfo(i.filter((a) => a.categoria === "Mouse"));
            break;
          case 2:
            setInfo(i.filter((a) => a.categoria === "Auricular"));
            break;
          case 3:
            setInfo(i.filter((a) => a.categoria === "Monitor"));
            break;
          case 4:
            setInfo(i.filter((a) => a.categoria === "Teclado"));
            break;
          default:
            setInfo(i);
            break;           
          } 
    })
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
