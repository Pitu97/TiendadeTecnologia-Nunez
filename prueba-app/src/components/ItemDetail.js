import './ItemDetail.css';


function ItemDetail({items, id}) {
  console.log(id);
  //const filtrado = items && items.filter(item => item.id === 1);

  return (
    <>
      <div className='Det'>
        {items && items.map(item => (<>
                                            <div className='text'>
                                              <h2>{item.nombre}</h2>
                                              <p>{item.precio}</p>
                                              <p>{item.descripcion}</p>
                                              <button className='boton'>Comprar</button>
                                            </div>
                                            <img src={item.img} atl="imagen" />
                                          </>))}
      </div>
    </>
  );
}

export default ItemDetail;
