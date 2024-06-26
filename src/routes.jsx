import {BrowserRouter, Navigate, useRoutes} from "react-router-dom"
import App from "./pages/App"
import Acerca from "./pages/Acerca"
import Productos from "./pages/Productos"
import Asesoria from "./pages/Asesoria"
import Proyectos from "./pages/Proyectos"
import Body from "./components/Body"



const Paths = () => {

    const element = useRoutes (
        [
            { 
                path : "/",
                element :<Navigate to="/inicio"/>
            },
            {
                path : "inicio",
                element :<Body/>
            },
            {
                path : "/acerca",
                element :<Acerca/>
            },
            {
                path : "/productos",
                element :<Productos/>
            },
            {
                path : "/asesoria",
                element :<Asesoria/>
            },

            {
                path : "/proyectos",
                element :<Proyectos/>
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