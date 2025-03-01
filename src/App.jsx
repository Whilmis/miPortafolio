
import { Header } from './component/Header.jsx'
import './App.css'
import { Oferta } from './component/Oferta.jsx'
import { Descripcion } from './component/descripcion.jsx'
import Carousel from './component/Carrusel.jsx'
import { Habilidades } from './component/Habilidades.jsx'
import { Contacto } from './component/Contacto.jsx'
import Footer from './component/Footer.jsx'


function App() {


  return (
    <>
    <Header/>
    <Oferta/>
    <Descripcion/>
    <Carousel />
    <Habilidades />
    <Contacto />
    <Footer/>
      
    </>
  )
}

export default App
