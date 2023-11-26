import App from "../pages/App";
import Country from "../pages/Movie";
import Dashboard1 from "../components/Dashboard1"
import Dashboard2 from "../components/Dashboard2"

const Body = () =>{

    const user =true;

    return (
        <>
        <div className='Nuevo'>
          {
            user
              ? (<Dashboard1/>)
              : (<Dashboard2/>)
          }
        </div>
        </>
      
    )    
}
export default Body
