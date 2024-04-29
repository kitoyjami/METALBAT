import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Formulario = () => {
      const ID1=import.meta.env.VITE_ID
      const TPID=import.meta.env.VITE_TEMPLATE_ID
      const key = import.meta.env.VITE_PUBLIC_KEY

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: 'design', // Valor por defecto
        message: '',
        acceptTerms: false,
      });
      const [enviado, setEnviado] = useState(false);

      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: type === 'checkbox' ? checked : value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault()
        emailjs.sendForm(ID1,TPID,event.target,key).then(response => 
          {
          console.log(response) 
          alert('Correo enviado con éxito')
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            serviceType: 'design', // Valor por defecto
            message: '',
            acceptTerms: false,
          })
          setEnviado(true)
        }
        ).catch(error=>console.log(error) )
        // Aquí puedes manejar la lógica para enviar el formulario
      };

    return (    

        <div className="quotation-form-container">
      <h2>Realizar una Cotización</h2>
      <p>Completa los campos para una asesoría personalizada.</p>

      <form onSubmit={handleSubmit}>

        <div className="form-section">
          <label htmlFor="firstName">Nombres:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-section">
          <label htmlFor="lastName">Apellidos:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-section">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-section">
          <label htmlFor="phone">Teléfono Celular:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-section">
          <label htmlFor="serviceType">Tipo de Servicio:</label>
          <select
            id="serviceType"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
          >
            <option value="design">Diseño</option>
            <option value="product">Producto</option>
            <option value="consulting">Asesoría</option>
          </select>
        </div>

        <div className="form-section">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="form-section">
          <label>
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <div className="form-section">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>

    )
}

export default Formulario