const Contacto = () =>
{
    return (
        <div className="contact-container">
      <div className="text-section">
        <h2>Solicita una Cotización</h2>
        <p>Contacta con nosotros para una asesoría personalizada.</p>
        <div className="buttons-section">
          <button className="contact-button">Contacto</button>
          <button className="contact-button">WhatsApp</button>
        </div>
      </div>
      <div className="image-section">
        <img src={"https://res.cloudinary.com/dtkojle4f/image/upload/v1701054324/job-5382501_1280_y96mfb.jpg"} alt="Imagen de contacto" />
      </div>
    </div>
    )
}

export default Contacto