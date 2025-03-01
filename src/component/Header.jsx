import './Header.css'
import back from '../assets/cuerpo.svg'


export const Header = () => {
  return (
    <>
    <div className='header container'>
        <div className='header_logo' >WP</div>
        <div className='header_links'>
            <a className='header_link' href="">Home</a><a className='header_link' href="">Acerca</a><a className='header_link' href="">Servicio</a><a className='header_link' href="">Portafolio </a><a className='header_link' href="">Contacto</a>
        </div>
        </div>
        <div className='backgrounds'>
          <div className='container_text'><p className='backgrounds-text'>Developer</p></div>
          <div className='img_container'><img className='img_item' src={back} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  /></div>
        
        </div>
        </>
  )
}
