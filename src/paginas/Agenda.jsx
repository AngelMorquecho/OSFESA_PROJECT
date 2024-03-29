import { sweetAgenda, sweetAlertSesion,sweetAlerCLienteNoEncontrado } from "../../sweetalert2/Alerta";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import OSFESA from "../IMG/OSFESA.png";

const Agenda = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState([]);
  const [nombre, setNombre] = useState('');


  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
          localStorage.clear();

          navigate("/");
        }, 3000000);
      }
    };
    sesion();
  }, []);
  const cerrarSesion = () => {
    localStorage.clear();
    navigate("/");
  };
 
  const consultar=(e)=>{
    e.preventDefault()
    if([nombre].includes('')){
      return sweetAgenda()
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/agenda.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
     
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setDatos(response);
        setNombre('')
       
        
      }).catch(()=>{
        sweetAlerCLienteNoEncontrado()
      })
    
     
   

  }
  
  return (
    <>
      <header >
        <div className="float-right ">
          <button
            onClick={cerrarSesion}
            type="button"
            className="text-center text-gray-400     
            mt-0 mr-5  cursor-pointer uppercase font-serif text-sm  "
          >
            Cerrar Sesion
          </button>

          <Link
            to="/menu"
            className="text-center text-gray-400     
            mt-0 mr-5 cursor-pointer uppercase font- text-sm  "
          >
            Menu
          </Link>
        </div>
      </header>

      <div className="object-left-top ">
        <Link to="/menu">
          <img src={OSFESA} className="w-25 h-14 " />
        </Link>
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Agenda
      </h1>
     
        
      <form
        className="py-6 px-5 md:w-2/2 "
        onSubmit={consultar}
      >
       <div className="flex justify-center">
       <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center "
          >
            Nombre:
          </label>
       </div>
         
          <div className=" flex justify-center">
          <input
            type="text"
            placeholder="Ingrese Nombre Correcto"
            id="nombre"
            name="nombre"
            className="border-2 w-64 md:w-2/2 p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            
          />
          </div>
        
       
          <div className="mt-2 flex justify-center">
        <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
          align-middle w-64 p-2  cursor-pointer hover:bg-blue-400 uppercase "
          value="Buscar Cliente"
        />
        </div>
      </form>
      
     

      <div className="flex justify-center ">
        <table className="bg-white px-6 py-5 md:w-2/2 rounded-lg shadow-lg ">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr >
            
            <th scope="col" className="p-2 text-lg bg-blue-400 text-center text-white">
               Apellido Paterno:
              </th>
              <th scope="col" className="p-2 text-lg bg-blue-400 text-center text-white">
               Apellido Materno:
              </th>
              <th scope="col" className=" p-2 text-lg bg-blue-400 text-center text-white">
               Nombre:
              </th>
              <th scope="col" className=" p-2 text-lg bg-blue-400 text-center text-white">
                Telefono:
              </th>
              
           
            </tr>
          </thead>

          <tbody>
            {datos.map((dato,index) => (
              <tr className="border-2 ">
                 <td  className="border-2 text-center">{dato.apellido_paterno}</td>
                 <td  className="border-2 text-center">{dato.apellido_materno}</td>
                 <td  className="border-2 text-center">{dato.nombre}</td>
                <td  className="border-2 text-center">{dato.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Agenda;
