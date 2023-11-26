import {BrowserRouter, Navigate, useRoutes} from "react-router-dom"
import App from "./pages/App"
import Country from "./pages/Movie"



const Paths = () => {

    const element = useRoutes (
        [
            { 
                path : "/",
                element :<Navigate to="/countries"/>
            },
            {
                path : "proyectos",
                element :<App/>
            },
            {
                path : "trabajos",
                element :<Country/>
            }
        ]
    )

    return element 
}

export default Paths