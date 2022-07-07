import './ItemDetail.css';


function ItemDetail({item}) {
  console.log(item);

  return (
    <div className='Det'>
        <h3>{item.nombre}</h3><p>{item.precio}</p><p>{item.descripcion}</p>
    </div>
  );
}

export default ItemDetail;
