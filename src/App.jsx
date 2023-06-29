import './App.css'
import ItemCount from './Componentes/ItemCount/ItemCount'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import CartWidget from './Componentes/CartWidget/CartWidget'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <div>

        <BrowserRouter>

            <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path='/categoria/:idCategoria' element ={<ItemListContainer/>}/>
              <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            </Routes>

            {/* <ItemListContainer greeting = {"Nuevos lanzamientos"}/>
            <ItemDetailContainer/> */}



        </BrowserRouter>

        {
          /*
          <ItemCount/>
          */
        }


      </div>

    </>
  )
}

export default App
