import '../styles/Lienzos.css'


import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ImagenInicial from './ImagenInicial';
import Descripciondos from './Descripciondos';
import Descripciontres from './Descripciontres';
import Testimonio from './Testimonio';
import Contacto from './Contacto';


const Lienzo1 = () => {


    return(
        <>       
         <ImagenInicial />
         <Descripciondos />
         <Descripciontres />
         <Testimonio />
         <Contacto />
    </>
        

    )
}
export default Lienzo1