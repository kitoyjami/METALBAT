import { useEffect, useState } from "react"
import { getProducts } from "../services"

const Headers = () =>{

    const [listCountries, setLisCountries] = useState ([])

    useEffect( () =>{
        const getData = async () => {
           const res= await getProducts()
           console.log(res)
           setLisCountries(res)
        }
        getData()

    }, [] )

    return (
        <p> Headers</p>
    )    
}

export default Headers