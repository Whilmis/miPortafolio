

import whil from '../assets/whilC.svg'

import './descripcion.css'

 export const Descripcion = () =>{

    return(<div className="descripcion_container container">
        <div>
            <h2 className='subtitle'>¿Quien soy?</h2>
        </div>
        <div className="descripcion_elements">
        <div className="descripcion_element">
            <img className='descripcion_img_item' src={whil} alt="imagen vectorizada de whilmis "  />
            <button type="button">DESCARGA MI CV</button>
        </div>
 
        <div className="descripcion_element">   
             <h3 className='name'>Whilmis Perez</h3>
             <h6>Ingeniero en Sistemas</h6>
             <p>Soy un Full Stack Developer  profesional con especialización en Frontend y experiencia en desarrollo de aplicaciones web intuitivas y optimizadas. Cuento con un sólido conocimiento en sistemas,  diseño gráfico y UX/UI, lo que me permite ofrecer soluciones integrales y centradas en la experiencia del usuario. Mi enfoque se basa en combinar habilidades técnicas y creativas para colaborar eficazmente con equipos multidisciplinarios y lograr resultados alineados con los objetivos del proyecto.

             <br></br>
             <br></br>

Destaco por mi adaptabilidad, atención al detalle y habilidades blandas como comunicación efectiva, trabajo en equipo y resolución de problemas, lo que me permite desempeñar un rol clave en entornos dinámicos y orientados a la innovación tecnológica.</p></div>
        </div>



        </div>)
 }