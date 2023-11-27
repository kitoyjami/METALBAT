import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
    { id: 1, name: 'Cliente 1', content: '¡Estoy muy contento con el servicio!', rating: 5 },
    { id: 2, name: 'Cliente 2', content: 'Experiencia increíble con la empresa.', rating: 4 },
    // Añade más testimonios según sea necesario
  ];

const Testimonio = () => {
    const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      };
    
    
    return (

        <div className="client-testimonials-container">
        <h2>Clientes Satisfechos</h2>
        <p>Lee algunos testimonios de clientes satisfechos.</p>
        <Slider {...sliderSettings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-info">
                <span className="testimonial-name">{testimonial.name}</span>
                <div className="testimonial-rating">
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <span key={index} role="img" aria-label="star">&#9733;</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    )
}

export default Testimonio