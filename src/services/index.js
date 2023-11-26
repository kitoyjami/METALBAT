import axios from "axios"
const baseUrl ='https://restcountries.com/v3.1'

const getProducts = async () => {
    const req = await axios.get(baseUrl+'/all')
    const res =req
    return res
}

export {getProducts}

