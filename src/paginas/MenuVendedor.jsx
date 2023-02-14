import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import OSFESA from "../IMG/OSFESA.png";

const MenuVendedor = () => {
  const navigate=useNavigate()
  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        }, 57000000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/");
        }, 60000000);
      }
    };
    sesion();
  }, []);
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-5 p-0 uppercase">
        MENU:
      </h1>

      <div className="flex justify-center mt-16 p-0">
        <div    className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300" >
            <Link to='/generales' className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase ">Generales</Link>
            <Link to='/generarApartado' className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
            w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase ">Generar Apartado</Link>
             <Link to='/recibo' className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle block 
            w-full p-3 mt-3  cursor-pointer hover:bg-blue-400 uppercase ">Recibo</Link>

        </div>
       
    
    
      </div>
    </>
  );
};
export default MenuVendedor;
