import code from '../assets/code.svg'
import design from '../assets/design.svg'
import seo from '../assets/seo.svg'

import './oferta.css'

 export const Oferta = () =>{

    return(<div className="oferta_container container">
        <div>
            <h2 className='subtitle'>¿Qué te ofrezco?</h2>
        </div>
        <div className="ofeta_cards">
        <div className="ofeta_card">
            <img className='oferta_img_item' src={code} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4>Programación Web</h4>
             <p>Desarrollo sitios y aplicaciones para plataformas Web.Construyo  tu proyecto de principio a fin: Frontend, Backend y Base de Datos.</p>
        </div>
        <div className="ofeta_card">
        <img className='oferta_img_item' src={design} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4>Diseño Web</h4>
             <p>Prototipo y maqueto tus diseños estáticos y los convierto en increíbles sitios y aplicaciones web responsivas, óptimas y accesibles. </p>
        </div>
        <div className="ofeta_card">   <img className='oferta_img_item' src={seo} alt="fondo vectorizado de distintas paginas con el nombre del whilmis creador del portafolio"  />
             <h4>SEO</h4>
             <p>Search Engine Optimization, optimizo tus sitios y aplicaciones web para que mejoren su posición en los buscadores orgánicamente.</p></div>
        </div>



        </div>)
    
}