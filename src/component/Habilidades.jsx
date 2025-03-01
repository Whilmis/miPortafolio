import html from '../assets/html5.svg'
import css3 from '../assets/css3.svg'
import JS from '../assets/js.svg'
import figma from '../assets/figma.svg'
import react from '../assets/react.svg'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import xd from '../assets/xd.svg'
import next from '../assets/next.svg'
import typescript from '../assets/typescript.svg'

import node from '../assets/nodejs.svg'

import './habilidades.css'

 export const Habilidades = () =>{

    return(<div className="oferta_container container">
        <div>
            <h2 className='subtitle'>Habilidades y herramientas</h2>
        </div>
    
         <div className='conatiner-icons'> 
                   <img className='habilidades_icon' src={html} alt="icono de  html5"  />
                   <img className='habilidades_icon' src={css3} alt="icono de CSS 3 "  />
                   <img className='habilidades_icon' src={JS} alt="icono de Javascript "  />
                   <img className='habilidades_icon' src={react} alt="icono de  React "  />
                   <img className='habilidades_icon' src={typescript} alt="icono de Typescript "  />
                   <img className='habilidades_icon' src={next} alt="icono de  Next "  />
                   <img className='habilidades_icon' src={node} alt="icono de  Node JS "  />
                   <img className='habilidades_icon' src={figma} alt="icono de figma "  />
                   <img className='habilidades_icon' src={photoshop} alt="icono de  Photoshop "  />
                   <img className='habilidades_icon' src={illustrator} alt="icono de  Illustrator"  />
                   <img className='habilidades_icon' src={xd} alt="icono de  adove xd"  />
                

         </div>
    

        </div>)
    
}