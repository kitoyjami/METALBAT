import { useEffect,useState } from "react"
import { getProducts } from "../services"

const useGetData = () => {
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

    return {listCountries, error}

}

export default useGetData