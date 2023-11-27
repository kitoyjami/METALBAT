import '../styles/Lienzos.css'


import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';



const Lienzo1 = () => {


    const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Ajusta este umbral según tu diseño

      // Cambia el estado dependiendo de si el usuario ha deslizado más allá del umbral
      setScrolled(scrollPosition > threshold);
    };

    // Agrega el event listener al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Limpia el event listener al desmontar el componente
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Configuración de animación con react-spring
  const textAnimation = useSpring({
    opacity: isScrolled ? 1 : 0,
    transform: isScrolled ? 'translateY(0)' : 'translateY(50px)',
  });


    return(
        <>
            <div className="hero-section">
      <img
        className="background-image"
        src="https://res.cloudinary.com/dtkojle4f/image/upload/v1701042813/brewery-8398533_1920_pz4b4a.jpg"
        alt="Imagen de fondo"
      />
      <div className="content">
        <h1>Descubre la belleza del diseño</h1>
        <h2>Nos especializamos en diseño, modelado e ingeniería</h2>
        <div className="buttons">
          <button className="explore-button">Explorar</button>
          <button className="contact-button">Contacto</button>
        </div>
      </div>
    </div>
      
      
    <div className="product-info-container">
      <animated.div className="text-container" style={textAnimation}>
        <h1 className='titulomedio'>Descubre la dureza y el estilo de nuestras puertas metálicas y ventanas</h1>
        <p>
          Nuestra compañía ofrece durabilidad y belleza en el diseño de puertas y ventanas,
          con productos que brindan seguridad y estética.
        </p>
        <div className="small-text">
          <div>
            <h3>Durabilidad</h3>
            <p>Usamos los mejores materiales para garantizar la máxima durabilidad.</p>
          </div>
          <div>
            <h3>Diseño</h3>
            <p>Contamos con un equipo de ingenieros para el diseño y la adecuación de soluciones industriales.</p>
          </div>
        </div>
      </animated.div>
      <div className="image-container">
        <img src={"https://res.cloudinary.com/dtkojle4f/image/upload/v1701046846/pexels-pixabay-53176_hsjj37.jpg"} alt="Puertas y Ventanas" />
      </div>
    </div>
    </>
        


    )
}
export default Lienzo1