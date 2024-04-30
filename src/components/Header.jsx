import { useEffect, useState } from "react"
import { getProducts } from "../services"
import WspBtn from "./WspBtn"
import { Link } from "react-router-dom"


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
                <a href="https://metalstructingenieria.com">
              <img 
              className="logo" 
              src="https://res.cloudinary.com/dtkojle4f/image/upload/v1701032126/LOGO_vmy0wi.png"
              alt="Logo de Página">
              </img>
              </a>
                </div>
                <div className="otro medio">
                    <p className="interno "> <Link className="referencia" to ="/inicio"> Inicio</Link></p>
                    <p className="interno "> <Link className="referencia" to ="/acerca"> About us</Link></p>
                    <p className="interno "> <Link className="referencia" to ="/productos"> Productos </Link> </p>
                    <p className="interno "> <Link className="referencia" to ="/asesoria">  Asesoria </Link> </p>
                    <p className="interno "> <Link className="referencia" to ="/proyectos">Proyectos </Link>  </p>
                </div>
                <div className="otro derecha">
                    < WspBtn/>
                </div>
            </div>
        </nav>

      </>
    )    
}

export default Headers