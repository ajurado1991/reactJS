import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = (props) => {

    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams ();

    useEffect( () => {
      const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

      funcionProductos(idCategoria)
        .then(res => setProductos(res))



      //getProductos()
        //.then(respuesta => setProductos(respuesta))
        //.catch(error => console.log(error))
    }, [idCategoria])


  return (
    <div>
          <h2>LADIP Tienda en linea</h2>
          <h3>{props.greeting}</h3>

          <ItemList productos={productos} />
    </div>

  )
}

export default ItemListContainer