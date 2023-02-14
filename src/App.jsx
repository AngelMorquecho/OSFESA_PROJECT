
import NuevoRegistro from './paginas/nuevoRegistro'
import Login from './paginas/Login'
import Generales from'./paginas/Generales'
import Apartado from './paginas/Apartado'
import Recibo from './paginas/Recibo'
import GenerarApartado from './paginas/GenerarApartado'
import MenuVendedor from './paginas/MenuVendedor'
import MenuCapturista from './paginas/MenuCapturista'
import MenuAdministrador from './paginas/MenuAdministrador'
import MenuDireccion from './paginas/MenuDireccion'
import{BrowserRouter,Routes,Route}from 'react-router-dom'



//Actualizado

function App() {
  

  return (
    
    <BrowserRouter >
    <Routes>
    <Route index='/' element={<Login/>}/>
      <Route path='/nuevoRegistro' element={<NuevoRegistro/>}/>
       <Route path='/generales' element={<Generales/>}/>
      <Route path='/apartado/:nombre/:apellidoP/apellidoM'element={<Apartado/>}/>
      <Route path='/recibo'element={<Recibo/>}/>
      <Route path='/generarApartado'element={<GenerarApartado/>}/>
      <Route path='/menuVendedor'element={<MenuVendedor/>}/>
      <Route path='/menuCapturista'element={<MenuCapturista/>}/>
      <Route path='/menuAdministrador'element={<MenuAdministrador/>}/>
      <Route path='/menuDireccion'element={<MenuDireccion/>}/>

    </Routes>
    </BrowserRouter>

  )
}

export default App
