import Formulario from "../components/Formulario";
import OSFESA from "../IMG/OSFESA.png";
import { Link } from "react-router-dom";

const NuevoRegistro = () => {
  return (
    <>
      <div className="object-left-top">
        <img src={OSFESA} className="w-25 h-14 " />
      </div>

      <h1 className="text-center font-medium text-3xl font-serif mt-0 p-0">
        Registrate:
      </h1>

      <div className="flex justify-center">
        <Formulario />
     </div>
    </>
  );
};
export default NuevoRegistro;
