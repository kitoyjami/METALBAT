
const ImagenInicial = () => {
    return(
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
    )
}
export default ImagenInicial