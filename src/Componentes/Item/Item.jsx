import { Link } from 'react-router-dom'
import './Item.css'


const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProductos'>
        <img src={img} alt={nombre}/>
        <h3>Nombre: {nombre}</h3>
        <p>Precio: ${precio}</p>
        <p>ID: {id}</p>
        {/* <button>Ver especificaciones</button> */}
        <Link className='botonEspecs' to={`/item/${id}`}>Ver especificaciones</Link>


    </div>
  )
}

export default Item