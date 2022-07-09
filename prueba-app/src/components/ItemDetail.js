import './ItemDetail.css';
import ItemCount from './ItemCount';

function ItemDetail({item, id}) {
  console.log(id);
  //const filtrado = items && items.filter(item => item.id === 1);

  const Add =(num) => {
    if(item.stock !== 0 && num <= item.stock) {
      console.log(num);
    }
  }

  return (
    <>
      <div className='Det'>
        
                                            <div className='text'>
                                              <h2>{item.nombre}</h2>
                                              <p>{item.precio}</p>
                                              <p>{item.descripcion}</p>
                                              <p>Stock: {item.stock}</p>
                                              <div className='botones'>
                                                <button className='boton'>Comprar</button>
                                                <ItemCount stock={item.stock} initial={1} onAdd={Add}/>
                                              </div>
                                            </div>
                                            <img src={item.img} atl="imagen" />
      </div>
    </>
  );
}

export default ItemDetail;

{/* {items && items.map(item => (<>
                                            <div className='text'>
                                              <h2>{item.nombre}</h2>
                                              <p>{item.precio}</p>
                                              <p>{item.descripcion}</p>
                                              <p>Stock: {item.stock}</p>
                                              <div className='botones'>
                                                <button className='boton'>Comprar</button>
                                                <ItemCount stock={item.stock} initial={1} onAdd={Add}/>
                                              </div>
                                            </div>
                                            <img src={item.img} atl="imagen" />
                                          </>))} */}