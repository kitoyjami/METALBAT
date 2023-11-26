import { useEffect, useState } from "react"
import { getProducts } from "../services"

const Headers = () =>{

    const [listCountries, setLisCountries] = useState ([])
    const [error,setError] = useState (null)

    useEffect( () =>{
        const getData = async () => {
            try
            {
                const res= await getProducts()
                console.log(res)
                setLisCountries(res)

            } catch (error){
                setError(error)
            }
        }
        getData()

    }, [] )

    return (
        <>
        <nav className="inicio navbar navbar-expand-lg ">
            <div className="container-fluid">
                <div className="otro logo">
                <a href="https://metalstructingenieria.com/inicio">
              <img 
              className="logo" 
              src="https://res.cloudinary.com/dtkojle4f/image/upload/v1701032126/LOGO_vmy0wi.png"
              alt="Logo de Página">
              </img>
              </a>
                </div>
                <div className="otro medio">
                    <p className="interno">About us</p>
                    <p className="interno">Productos </p>
                    <p className="interno">Asesoria</p>
                    <p className="interno">Proyectos</p>
                </div>
                <div className="otro derecha">
                    <button type="button" className="button primary-btn">Contactar </button>
                </div>
            </div>
        </nav>

      </>
    )    
}

export default Headers