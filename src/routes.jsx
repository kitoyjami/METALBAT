import {BrowserRouter, Navigate, useRoutes} from "react-router-dom"
import App from "./pages/App"
import Country from "./pages/Movie"



const Paths = () => {

    const element = useRoutes (
        [
            { 
                path : "/",
                element :<Navigate to="/inicio"/>
            },
            {
                path : "inicio",
                element :<App/>
            },
            {
                path : "trabajos",
                element :<Country/>
            },
            {
                path: '/404',
                element: <p className="text-center"> Page not found</p>
            },
            {
                path:"*",
                element: <Navigate to={"/"} replace />
            }
        ]
    )

    return element 
}

export default Paths