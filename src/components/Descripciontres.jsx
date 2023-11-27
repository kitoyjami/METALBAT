import icon1 from '../icons/icono1.svg' 
import icon2 from '../icons/icono2.svg' 
import icon3 from '../icons/icono3.svg' 

const Descripciontres = () => {



    return (
        <>
        <div className="engineering-info-container">
        <div className="left-content">
          <h2>Ofrecemos un amplio rango de proyectos de ingeniería, incluyendo desarrollo e instalaciones.</h2>
          <p>Nuestro equipo está conformado por ingenieros especializados en proveer soluciones para el desarrollo de productos metálicos, puertas, ventanas, metalmecánica industrial. Brindamos gran calidad y asistencia personalizada para el desarrollo de sus productos.</p>
        </div>
        
        <div className="right-content">
          <div className="section">
            <img src={icon1} alt="Icono 1" />
            <h3>Desarrollo de soluciones personalizadas para proyectos</h3>
            <p>Nuestro equipo de expertos trabaja de la mano contigo para implementar tus soluciones.</p>
            <a href="#">Leer más</a>
          </div>
          <div className="section">
            <img src={icon2} alt="Icono 2" />
            <h3>Calidad de productos y garantía en las instalaciones</h3>
            <p>Brindamos garantía de hasta un año en instalaciones metálicas, puertas y ventanas para todos nuestros proyectos de ingeniería.</p>
            <a href="#">Leer más</a>
          </div>
          <div className="section">
            <img src={icon3} alt="Icono 3" />
            <h3>Expertos y software para soluciones a medida</h3>
            <p>Nuestro equipo de ingenieros está a su disposición a través del chat para cualquier consulta sobre proyectos.</p>
            <a href="#">Leer más</a>
          </div>
        </div>
      </div>
        
        </>
    )
}

export default Descripciontres
