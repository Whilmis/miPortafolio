import Formulario from './Formulario';
import home from '../assets/home.svg'
import correo from '../assets/envelope.svg'
import hashtag from '../assets/hashtag.svg'
import linkedin from '../assets/linkedin.svg'
import git from '../assets/github.svg'


import './contacto.css'

 export const Contacto = () =>{

    return(<div className='contacto'>
    <div className="contacto_container container">
        <div>
            <h2 className='subtitle'>Contacto</h2>
        </div>
        <div className="contacto_cards">
        <div className="contacto_card">
            <img className='contacto_img_item' src={home} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4 className='contacto-subtitle'>UBICACIÓN</h4>
             <p> Latina, Madrid, España</p>
        </div>
        <div className="contacto_card">
        <img className='contacto_img_item' src={correo} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4 className='contacto-subtitle' >EMAIL</h4>
             <p>whilmisweb@gmail.com </p>
        </div>
        <div className="contacto_card">   <img className='oferta_img_item' src={hashtag} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4 className='contacto-subtitle' >SOCIAL MEDIA</h4>
             <div className='icons-media'> <a href="http://"><img className='contacto_img_item' src={linkedin} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  /></a><a href="http://"><img className='contacto_img_item' src={git} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  /></a> </div>
            </div>
        </div>



        </div>

        <Formulario/>

      
        
        </div>)
    
}