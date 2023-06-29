import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='detalleProductos'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed commodi enim repudiandae accusantium eum, asperiores doloremque libero iure sint laudantium! Voluptatem magni ratione a atque error adipisci quam ipsa ducimus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia nihil eligendi obcaecati neque accusantium placeat nam repudiandae incidunt iusto, hic soluta modi iste vero labore quos illum! Vitae, voluptas voluptatibus.</p>
        <img src={img} alt={nombre}/>
    </div>
  )
}

export default ItemDetail