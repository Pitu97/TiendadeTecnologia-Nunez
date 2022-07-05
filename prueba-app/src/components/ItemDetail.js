import './ItemDetail.css';


function ItemDetail({items}) {
 
  return (
    <>
    <div className='Det'>
        {items && items.map(item => (<><h3>{item.nombre}</h3><p>{item.precio}</p><p>{item.descripcion}</p></>))}
    </div>
    </>
  );
}

export default ItemDetail;
