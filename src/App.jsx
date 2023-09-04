
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarCustom from './Componentes/NavbarCustom'
import Itemlistcontainer from './Componentes/Itemlistcontainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer'
import { CartProvider } from './context/CartContext'
import { initializeApp } from "firebase/app";
import CartWidgetItems from './Componentes/CartWidgetItems'
// import { doc, getDoc, getFirestore, collection, getDocs} from 'firebase/firestore';
// import { useEffect } from 'react'


const firebaseConfig = {
  apiKey: "AIzaSyB_vYrexpKq1aocdrLrPxdOqVSLOo1QKIc",
  authDomain: "coderhousereact-3d3b0.firebaseapp.com",
  projectId: "coderhousereact-3d3b0",
  storageBucket: "coderhousereact-3d3b0.appspot.com",
  messagingSenderId: "39619375751",
  appId: "1:39619375751:web:62ec1b4307e604de153e22"
};

initializeApp(firebaseConfig);


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
            <Route path='/cartWidget' element={<CartWidgetItems />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
