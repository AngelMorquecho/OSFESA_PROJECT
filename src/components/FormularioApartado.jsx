
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  sweetAlertcatch,
  sweetAlertError,

  sweetAlert,

} from "../../sweetalert2/Alerta";




const FormularioApartado = () => {
 
  const navigate=useNavigate()

  const  [idProspecto,setIdProspecto]=useState('')
  const  [nombre,setNombre]=useState(localStorage.getItem('usuario.nombre'))
  const  [apellidoPaterno,setApellidoPaterno]=useState(localStorage.getItem('usuario.apellidoPaterno'))
  const  [apellidoMaterno,setApellidoMaterno]=useState(localStorage.getItem('usuario.apellidoMaterno'))
  const  [fechaApartado, setFechaApartado]=useState('')
  const  [idProyecto, setIdProyecto]=useState('')
  const  [importe, setImporte]=useState('')
  const  [estatus, setEstatus]=useState('APARTADO')
  const [idLoteSFernando, setIdLoteSFernando] = useState('');
  const [idLoteSFrancisco, setIdLoteSFrancisco] = useState('');
  const [idLoteSJ, setIdLoteSJ] = useState('');
  const [idLoteSanFeranado, setIdLoteSanFernando]=useState([])
  const [idLoteSanFancisco, setidLoteSanFrancisco]=useState([])
  const [idLoteSJose, setidLoteSJose]=useState([])
  
 

  useEffect(() => {
    const consultarApi = async () => {

      const url = `${import.meta.env.VITE_BACKEND_URL}/obtenerIdLote.php`;

      const respuesta = await fetch(url);
      const relustado= await respuesta.json()
     

      setIdLoteSanFernando(relustado);
     


  
    };
    consultarApi();
  }, []);
 
    const handleSubmit = (e) => {
      e.preventDefault();
      if ([idProyecto,importe].includes('')) {
       return  sweetAlertError();
      }
  
      fetch(`${import.meta.env.VITE_BACKEND_URL}/crearApartado.php`,{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-type":"application/json",
        },
        body:JSON.stringify({
          idProspecto:idProspecto,
          fecha:fechaApartado,
          idProyecto:idProyecto,
          idLote:idLoteSFernando,
          
          importe:importe,
         estatus:estatus
          
        
        
         
         
        
        }),
       
        
  
      }).then((response) => {
          if (response.status == true) {
             response.json();
             
          
          }
          sweetAlert();
         setTimeout(() => {
          const respuesta=confirm('Deseas Agregar Mas Apartados Este Mismo Usuario')
          if(!respuesta){
            navigate('/generales')
          }
      
       
         }, 15000);
         
          
      
        
        })
        .catch(()=>{
          sweetAlertcatch()
        })
      
       
    };
  

  return (
    <>
    
      <form
       className="bg-white py-6 px-5 md:w-1/2 rounded-lg shadow-lg mt-0  shadow-zinc-300"
        onSubmit={handleSubmit}
      >    
       <div className=" mb-3 p-3">
          <label
            htmlFor="nombre"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Nombre:
          </label>
          <input
            type="text"
        
            id="nombre"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={nombre}
           
    
     
          />
           <label
            htmlFor="apellidoPaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Paterno:
          </label>
          <input
            type="text"
        
            id="apellidoPaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={apellidoPaterno}
           
    
     
          />
           <label
            htmlFor="apellidoMaterno"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Apellido Materno:
          </label>
          <input
            type="text"
        
            id="apellidoMaterno"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md"
            value={apellidoMaterno}
           
    
     
          />
          
          <label
            htmlFor="fechaFinal"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Fecha Final:
          </label>
          <input
            type="date"
            placeholder="Ingrese Fecha Final de Recibo Correcta"
            id="fechaFinal"
            name="fechaFinal"
            className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md uppercase"
            value={fechaApartado}
            onChange={e=>setFechaApartado(e.target.value)}
          />
        </div>
         
     
        
        <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_PROYECTO:
          </label>
          <select value={idProyecto} onChange={e=>setIdProyecto(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
            <option value=''>--Selecciona el Proyecto Deseado--</option>
            <option>SAN FERNANDO</option>
            <option>SAN FRANCISCO</option>
            <option>SAN JOSE</option>
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_LOTE(s) San Feranando:
          </label>
          <select value={idLoteSFernando} onChange={e=>setIdLoteSFernando(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
             <option value="">--Seleccione Lote--</option>
        {idLoteSanFeranado.map(opcion=>(
            <option
             key={opcion.id_lote}
            value={opcion.id_lote}>
                
           {opcion.id_lote} </option>
        ))}
            
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_LOTE(s) San Francisco:
          </label>
          <select value={idLoteSFrancisco} onChange={e=>setIdLoteSFrancisco(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
             <option value="">--Seleccione Lote--</option>
        {idLoteSanFancisco.map(opcion=>(
            <option
             key={opcion.id_lote}
            value={opcion.id_lote}>
                
           {opcion.id_lote} </option>
        ))}
            
          </select>
          </div>
          <div className="mb-3 p-3">
          <label
            htmlFor="idProyecto"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ID_LOTE(s) San Jose:
          </label>
          <select value={idLoteSJ} onChange={e=>setIdLoteSJ(e.target.value)} className='uppercase font-bolt
          shadow-md rounded-md'>
             <option value="">--Seleccione Lote--</option>
        {idLoteSJose.map(opcion=>(
            <option
             key={opcion.id_lote}
            value={opcion.id_lote}>
                
           {opcion.id_lote} </option>
        ))}
            
          </select>
          </div>
          <div className="mb-2 p-2">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            Importe $:
          </label>
          <input
            type="text"
            placeholder="Ingrese Importe Correcto"
            id="importe"
            className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
            value={importe}
            onChange={e=>setImporte(e.target.value)}
     
          />
          </div>
         
          <div className="mb-2 p-2">
          <label
            htmlFor="importw"
            className="text-gray-700 uppercase font-bold text-center"
          >
            ESTATUS:
          </label>
          <input
            type="text"
            placeholder="Ingrese Importe Correcto"
            id="importe"
            className="border-2 w-full p-2 mt-0 placeholder-gray-500 rounded-md"
            value={estatus}
            onChange={e=>setEstatus(e.target.value)}
      
     
          />
          </div>
         
          <input
          type="submit"
          className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white align-middle
            w-full p-3  cursor-pointer hover:bg-blue-400 uppercase "
          value="Generar Apartado"
        />
           
        </form>

     
    </>
  );
};
export default FormularioApartado;
