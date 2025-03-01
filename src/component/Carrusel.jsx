
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/pagina-inicio-web-corporativa.webp';
import donFacturacion from '../assets/donFacturacion.jpg';
import planning from '../assets/Planning.jpg';
import ites from '../assets/ites.png';
import "./carrusel.css"; // Para estilos personalizados

const cards = [
    { id: 1, title: "Don Facturacion",
       description: "  Sistema de Facturación y Gestión de Mini Market Este sistema, desarrollado con Next.js, permite gestionar tanto la facturación como la compra de productos dentro de un mini market. Está diseñado para ser rápido, eficiente y fácil de usar, ofreciendo una interfaz moderna y optimizada.",
       image:donFacturacion ,url: 'https://github.com/Whilmis/don-facturacion' },
    { id: 2, title: "Planning scheduling", description: "Formé parte del equipo de desarrollo frontend en la creación de un sistema de planificación de operaciones para AB InBev, utilizando React. Este sistema optimiza la gestión y organización de tareas operativas, ofreciendo una experiencia fluida y altamente interactiva.", image: planning,
      url: 'https://dev.azure.com/ab-inbev-maz/MAZ_Supply_P_and_S/_git/plan-scheduling-frontend/pullrequest/5655'
    },
    { id: 3, title: "San Valero (ITES)", description: "Participé en el desarrollo del Sistema de Gestión Académica para el Instituto Tecnológico de Educación Superior Oscus San Valero (ITES), enfocándome en el frontend con React para una experiencia de usuario fluida e interactiva, mientras que el backend fue desarrollado en Node.js para garantizar un rendimiento óptimo y escalabilidad.", image: ites,
      url: 'https://github.com/Whilmis/uni-front'
    },
    { id: 4, title: "Card 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit fusce lectus dignissim et sed tortor tortor nisi.", image: img1,
      url: 'https://github.com/Whilmis/don-facturacion'
     },
  ];
  

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
         <div>
            <h2 className='subtitle'>Mis trabajos</h2>
        </div>
    <div className="carousel-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className="barra"></div>
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <a href={card.url}>ir al proyecto</a>
          </div>
        ))}
      </Slider>
    </div>
    </>
  );
};

export default Carousel;
