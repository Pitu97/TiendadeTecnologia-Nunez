import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
    const [detail, setDetail] = useState({})
    const {idItem} = useParams();
    //console.log(idItem);

    useEffect(() => {
      const base = getFirestore();

      const q = doc(base, "items", idItem)

      getDoc(q).then((item) => {
          if(item.exists()){
            setDetail({...item.data()});
          }
      })
    }, [])
    
    return (
      <>
        <div className='ItemDetail'>
          <ItemDetail item={detail} />     
        </div>
      </>
    );
  }
  
  export default ItemDetailContainer; 