
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarCustom from './Componentes/NavbarCustom'
import Itemlistcontainer from './Componentes/Itemlistcontainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavbarCustom />
          <Routes>
            <Route path='/' element={<Itemlistcontainer />} />
            <Route path='/category/:categoryId' element={<Itemlistcontainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
