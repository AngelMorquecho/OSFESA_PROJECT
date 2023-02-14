import FormularioGenerarApartado from "../components/FormularioGenerarApartado";
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { sweetAlertSesion } from "../../sweetalert2/Alerta";
import OSFESA from "../IMG/OSFESA.png";


const GenerarApartado = () => {
  const navigate = useNavigate();
  useEffect(()=>{

  },[])

  useEffect(() => {
    const sesion = () => {
      const usuario = localStorage.getItem("usuarioId");
      if (!usuario) {
        navigate("/login");
      } else {
        setTimeout(() => {
          sweetAlertSesion();
        }, 570000);

        setTimeout(() => {
          localStorage.clear();
          navigate("/login");
        }, 600000);
      }
    };
    sesion();
  }, []);
  const cerrarSesion=()=>{
    localStorage.clear()
    navigate('/login')
  }
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>
      <div className="float-right mt-0 ">
        <button onClick={cerrarSesion}type="button" className="text-center text-gray-400     
            mt-0  cursor-pointer uppercase font-serif text-sm py-4 ">Cerrar Sesion</button>
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0 uppercase">
        Generar Apartado:
      </h1>

      <div className="flex justify-center">
        <FormularioGenerarApartado/>
      </div>
    </>
  );
};
export default GenerarApartado;