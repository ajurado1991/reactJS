import './App.css'
import ItemCount from './Componentes/ItemCount/ItemCount'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import CartWidget from './Componentes/CartWidget/CartWidget'

function App() {


  return (
    <>
      <div>

        <NavBar/>
        <ItemListContainer greeting = {"Welcome"}/>
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
