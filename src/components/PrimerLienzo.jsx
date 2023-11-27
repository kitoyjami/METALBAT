import '../styles/Lienzos.css'


import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import ImagenInicial from './ImagenInicial';
import Descripciondos from './Descripciondos';
import Descripciontres from './Descripciontres';


const Lienzo1 = () => {


    return(
        <>       
         <ImagenInicial />
         <Descripciondos />
         <Descripciontres />
    </>
        


    )
}
export default Lienzo1