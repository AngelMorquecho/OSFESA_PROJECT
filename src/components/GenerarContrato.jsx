import { useState } from "react";
import {
  sweetAlerCLienteNoEncontrado,
  sweetAlerGenerarApartado,
} from "../../sweetalert2/Alerta";

const Contrato = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellidoPaterno: "",
  });
  const [datos, setDatos] = useState({});

  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [cantidadTotal, setCantidadTotal] = useState("");
  const [cantidadPago, setCantidadPago] = useState("");
  const [numeroSemanas, setNumeroSemanas] = useState("");
  const [fecha, setFecha] = useState("");
  const [cantidadLotes, setCantidadLotes] = useState([]);
  const [zona, setZona] = useState([]);
  const [superficie, setSuperficie] = useState("");
  const [boton, setBoton] = useState(true);
  const [botonCrear, setBotonCrear] = useState(false);
  const handleConsultar = () => {
    if (Object.values(usuario).includes("")) {
      return sweetAlerGenerarApartado();
    }
    fetch(`${import.meta.env.VITE_BACKEND_URL}/buscarDatosContrato.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setDatos(response);
        console.log(datos);
      })
      .catch(() => {
        sweetAlerCLienteNoEncontrado();
      });
    fetch(`${import.meta.env.VITE_BACKEND_URL}/generarLotes.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setCantidadLotes(response);
      });
    fetch(`${import.meta.env.VITE_BACKEND_URL}/obtenerZonaContrato.php`, {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-type":"application/json",
      },
      body: JSON.stringify({
        nombre: usuario.nombre,
        apellidoPaterno: usuario.apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
      }),
      //mode:"no-cors"
    })
      .then((responseJson) => responseJson.json())

      .then((response) => {
        setZona(response);
       
      });
      
      setBoton(false)
      setBotonCrear(true)
  };
  const handleCrearContrato=()=>{
    setBotonCrear(false)
   setTimeout(()=>{
    window.print()


   },1000)
  }

  const handleChangeUsuario = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="py-6 px-5 md:w-1/2 rounded-lg mt-0 ">
        <p className="text-justify  font-normal">
          CONTRATO PRIVADO PROMESA DE COMPRAVENTA DE INMUEBLE, QUE CELEBRA POR
          UNA PARTE EL SE??OR OSCAR FERNANDO ORT??Z CONTRERAS POR SUS PROPIO
          DERECHO Y A QUIEN EN LO SUCESIVO SE LE DENOMINAR?? EL PROMITENTE
          VENDEDOR Y POR LA OTRA PARTE LA  C.
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-44 mr-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Nombre"
            
            value={usuario.nombre}
            onChange={handleChangeUsuario}
          />
          <input
            type="text"
            id="apellidoPaterno"
            name="apellidoPaterno"
            className=" w-36 mr-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Apellido Paterno"
            value={usuario.apellidoPaterno}
            onChange={handleChangeUsuario}
          />{" "}
          <input
            type="text"
            id="apellidoMaterno"
            name="apellidoMaterno"
            className="w-36 mr-1 placeholder-gray-500 rounded-md uppercase text-center "
            placeholder="Apellido Materno"
            value={apellidoMaterno}
            onChange={(e) => setApellidoMaterno(e.target.value)}
          />
          TAMBI??N POR SU PROPIO DERECHO Y A QUIEN M??S ADELANTE SE LES DESIGNAR??
          LA PROMINENTE COMPRADORA , AS?? MISMO CUENTAN CON LA CAPACIDAD LEGAL
          PARA CONTRATAR Y OBLIGARSE V??LIDAMENTE AL TENOR DE LAS SIGUIENTES
          DECLARACIONES Y CL??USULAS:
        </p>
        <h3 className="text-center text-xl uppercase font-sans mt-1">
          Declaraciones:
        </h3>
        <h4 className="text-left text-sm uppercase font-black ">
          De Los Vendedores:
        </h4>
        <p className="text-justify  font-normal mt-1">
          I. Declara el Se??or{" "}
          <span className="font-black text-sm">
            OSCAR FERNANDO ORT??Z CONTRERAS
          </span>{" "}
          que es mexicano, de 40 a??os de edad, estar soltero, con domicilio
          particular ubicado en la calle Rep??blica del Salvador No. 1506 del
          fraccionamiento Jardines de Santa Elena de ??sta Ciudad, adem??s de ser
          due??o, contar con la posesi??n y facultades para enajenar, las
          fracciones o lotes que se desprendan del inmueble descrito a
          continuaci??n:
        </p>
        <p className="text-justify  font-normal mt-1">
          Inmueble ubicado en la parcela No. 325Z10 P1/1 del ejido El Colorado
          municipio de Aguascalientes con superficie de 8-05-92.07 OCHO
          HECTAREAS, CINCO AREAS, NOVENTA Y DOS PUNTO CERO SIETE CENTIAREAS, con
          las siguientes medidas y colindancias:
        </p>
        <p className="text-left font-normal mt-1">
          NORTE 551.96 MTS. CON PARCELA 317,
        </p>
        <p className="text-left font-normal mt-1">
          ESTE 148.67 MTS. CON PARCELA 318,
        </p>
        <p className="text-left font-normal mt-1">
          SUR 539.58 MTS. CON PARCELA 326,
        </p>
        <p className="text-left font-normal mt-1">
          OESTE 149.76 MTS. EN LINEA QUEBRADA CON BRECHA.
        </p>
        <p className="text-left font-normal mt-1">
          II. Que el inmueble anteriormente descrito lo adquirieron por compra
          efectuada con el{" "}
          <span className="font-black text-sm">C. RUBEN MACIAS RODRIGUEZ</span>,
          antiguo propietario.
        </p>
        <p className="text-justify font-normal mt-1">
          III.Que{" "}
          <span className="font-black text-sm">
            {" "}
            BAJO PROTESTA DE DECIR VERDAD
          </span>
          , el inmueble de que se trata se encuentra libre de todo gravamen y
          responsabilidad.
        </p>
        <h4 className="text-left text-sm uppercase font-black mt-1 ">
          Del Comprador
        </h4>
        <p className="text-left font-normal mt-1">
          I. La parte compradora, manifiesta ser {" "}
          <input
            type="text"
            id="nacionalidad"
            name="nacionaliad"
            className=" w-15  placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Nacionalidad"
            value={datos.NACIONALIDAD}
            disabled
          />
          , de {" "}
          <input
            type="number"
            id="edad"
            name="edad"
            className=" w-9  placeholder-gray-500 rounded-md uppercase number-center"
            value={datos.EDAD}
            disabled
          />
          a??os de edad,
          <input
            type="text"
            id="estadoCivil"
            name="esatdoCivil"
            className=" w-28 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Estado Civil"
            value={datos.ESTADO_CIVIL}
            disabled
          />{" "}
          , con estudios de
          <input
            type="text"
            id="estudios"
            name="estudios"
            className="w-32 mt-1  placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Estudios"
            value={datos.GRADO_ESTUDIOS}
            disabled
          />{" "}
          , de ocupaci??n
          <input
            type="text"
            id="ocupacion"
            name="ocupacion"
            className=" w-32 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Estado Civil"
            value={datos.OCUPACION}
            disabled
          />
          , Tel??fono
          <input
            type="text"
            id="telefono"
            name="telefono"
            className=" w-32 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Telefono"
            value={datos.TELEFONO}
            disabled
          />{" "}
          con domicilio particular el ubicado en la Calle{" "}
          <input
            type="text"
            id="calle"
            name="calle"
            className=" w-80 mt-1 placeholder-gray-500 rounded-md uppercase text-left"
            placeholder="Calle"
            value={datos.DIRECCION}
            disabled
          />
          . Col.
          <input
            type="text"
            id="colonia"
            name="colonia"
            className=" w-72  mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Colonia"
            value={datos.COLONIA}
            disabled
          />
          , Municipio de
          <input
            type="text"
            id="municipio"
            name="municipio"
            className=" w-15  mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Municipio"
            value={datos.MUNICIPIO}
            disabled
          />
          , en el estado de
          <input
            type="text"
            id="estado"
            name="estado"
            className=" w-32 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Estado"
            value={datos.ESTADO}
            disabled
          />
          , as?? mismo y{" "}
          <span className="font-black text-sm">
            {" "}
            BAJO PROTESTA DE DECIR VERDAD
          </span>
          , manifiesta que es su voluntad adquirir por medio de una compra venta
          las fracciones que se desprende del inmueble antes descrito, y que a
          continuaci??n me permito describir.
        </p>
        <p className="text-left font-normal mt-1">
          De la Hect??rea 1,Zona(s)
          {zona.map((zona, index) => (
            <input
              type="text"
              id="nombre"
              name="nombre"
              className=" w-10  placeholder-gray-500 rounded-md uppercase text-center"
              placeholder="Nombre"
              value={zona.ZONA}
              key={index}
              disabled
            />
          ))}
          , Lote(s)
          {cantidadLotes.map((lote, index) => (
            <input
              type="text"
              id="nombre"
              name="nombre"
              className=" w-10 placeholder-gray-500 rounded-md uppercase text-center"
              placeholder="Nombre"
              value={lote.LOTE}
              key={index}
              disabled
            />
          ))}
          de la Manzana 2 CON SUPERFICE DE
          <input
            type="number"
            id="superficie"
            name="superficie"
            className=" w-32 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            min={0}
            value={superficie}
            onChange={(e) => setSuperficie(e.target.value)}
          />
          MTS2. CON LAS SIGUIENTES MEDIDAS Y COLINDANCIAS:
        </p>
        {cantidadLotes.map((info, index) => (
          <>
            <h5 className="text-left font-normal mt-1">
              Del lote
              <input
                type="text"
                id="lote"
                name="lote"
                className="w-10 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
                value={info.LOTE}
                key={index}
                disabled
              />
            </h5>
            <p className="text-left font-normal mt-1">
              AL NORTE 15 MTS. CON {" "}
              <input
                type="text"
                id="lote"
                name="lote"
                className="w-20  mt-1 placeholder-gray-500 rounded-md uppercase text-left"
                placeholder="Lote"
                value={info.COLINDANCIA_NORTE}
                disabled
              />
              .
            </p>
            <p className="text-left font-normal mt-1">
              AL SUR 15 MTS. CON {" "}
              <input
                type="text"
                id="lote"
                name="lote"
                className="w-20  mt-1 placeholder-gray-500 rounded-md uppercase text-left"
                placeholder="Lote"
                value={info.COLINDANCIA_SUR}
                disabled
              />
              .
            </p>
            <p className="text-left font-normal mt-1">
              AL ORIENTE 7 MTS. CON {" "}
              <input
                type="text"
                id="lote"
                name="lote"
                className=" w-20 mt-1 placeholder-gray-500 rounded-md uppercase text-left"
                placeholder="Lote"
                value={info.COLINDANCIA_ORIENTE}
                disabled
              />
              .
            </p>
            <p className="text-left font-normal mt-1">
              AL PONIENTE 7 MTS. CON {" "}
              <input
                type="text"
                id="lote"
                name="lote"
                className="w-20 mt-1 placeholder-gray-500 rounded-md uppercase text-left"
                placeholder="Lote"
                value={info.COLINDANCIA_PONIENTE}
                disabled
              />
              .
            </p>
          </>
        ))}

        <p className="text-justify  font-normal mt-1">
          Fundados en lo anteriormente expuesto, los comparecientes otorgan el
          presente contrato al tenor de las siguientes:
        </p>
        <h3 className="text-center text-xl uppercase font-sans mt-0">
          Clausulas
        </h3>
        <p className="text-justify  font-normal mt-1">
          PRIMERA.- El ???PROMITENTE VENDEDOR??? promete vender a la ???PROMITENTE
          COMPRADORA???, quien a su vez promete adquirir el inmueble que ha
          quedado descrito en la declaraci??n I{")"}
          del comprador del presente instrumento, el cual se tiene aqu?? por
          reproducido para todos los efectos legales a que haya lugar sin
          servicio alguno, con la posibilidad de brindarles el servicio de
          electricidad y agua potable una vez vendido el 90% del desarrollo, as??
          mismo el promitente comprador se obliga a instalar un Biodigestor como
          medida provisional de drenaje.
        </p>
        <p className="text-justify  font-normal mt-1">
          SEGUNDA. - Ambas partes acuerdan que el costo total de la compra venta
          lo ser?? por la cantidad de
          <input
            type="text"
            id="costo"
            name="costo"
            className=" mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center min-w-full"
            placeholder="Cantidad Total"
            value={cantidadTotal}
            onChange={(e) => setCantidadTotal(e.target.value)}
          />
          los cuales ser??n pagados de la siguiente manera:
        </p>
        <p className="text-justify  font-normal mt-1">
          a{")"}. - Los pagos ser??n cubiertos mediante un financiamiento a
          <input
            type="text"
            id="semanas"
            name="semanas"
            className=" w-16 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Numero de Semanas"
            value={numeroSemanas}
            onChange={(e) => setNumeroSemanas(e.target.value)}
          />
          semanas, donde la compradora se obliga a realizar el pago de
          <input
            type="text"
            id="costo"
            name="costo"
            className=" w-80 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Pago"
            value={cantidadPago}
            onChange={(e) => setCantidadPago(e.target.value)}
          />
          los d??as lunes de cada semana, en las oficinas ubicadas en la calle
          Rep??blica del Salvador No. 1506 del fraccionamiento Jardines de Santa
          Elena de ??sta Ciudad, realizando el primer pago el d??a de
          <input
            type="text"
            id="fecha"
            name="fecha"
            className=" w-60 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Fecha Pago"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />{" "}
          hasta concluir con las
          <input
            type="text"
            id="semanas"
            name="semanas"
            className=" w-16  mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Numero de Semanas"
            value={numeroSemanas}
            onChange={(e) => setNumeroSemanas(e.target.value)}
          />{" "}
          semanas referidas anteriormente.
        </p>
        <p className="text-justify  font-normal mt-1">
          Par lo cual, se agrega al presente contrato, la amortizaci??n que
          servir?? de base para determinar los pagos recibidos de manera
          semanales. (ANEXO 1)
        </p>
        <p className="text-justify  font-normal mt-1">
          As?? mismo, y en caso de incumplimiento por parte de la prominente
          compradora, por m??s de tres semanas consecutivas, perder?? el lote
          adquirido, as?? como lo construido en ??l, as?? como los pagos ya
          realizados, por tanto, deber?? entregar la posesi??n (si esta le fue
          entregada) del citado lote a los prominentes vendedores en un t??rmino
          de 15 d??as despu??s que se le acredite el incumplimiento (es decir,
          vencidas las fechas de los pagos pendientes).
        </p>
        <p className="text-justify  font-normal mt-1">
          En caso de que se cumpla a cabalidad los pagos establecidos, el
          PROMINENTE VENDEDOR se obliga a mas tardar en seis meses posteriores a
          la liquidaci??n del adeudo, a obtener el dominio pleno de dicho
          inmueble ante el Registro Agrario Nacional, Y posteriormente iniciar
          con los tramites tendientes a la escritura correspondiente y
          formalizar as?? la compra venta con PROMINENTE COMPRADOR, todo esto
          ante Notario P??blico de la ciudad de Aguascalientes, momento en que la
          parte vendedora deber?? entregar la propiedad legal del inmueble
          materia del presente contrato y por ende del contrato de compraventa.
        </p>
        <p className="text-justify  font-normal mt-1">
          TERCERA. - Ahora bien, y una vez que se formalice la compraventa a
          favor de los ???PROMITENTES COMPRADORES???, todos los gastos, impuestos y
          honorarios que cauce la escritura definitiva, as?? como los gastos e
          impuestos normales del presente contrato y de las hipotecas y apertura
          de cr??dito, en su caso, ser??n a cargo de los compradores.
        </p>
        <p className="text-justify  font-normal mt-1">
          CUARTA. - Las partes est??n de acuerdo en entregar la posesi??n del
          inmueble materia del presente contrato, una vez que se haya firmado el
          presente instrumento, pudiendo los ???PROMINENTES COMPRADORES???, realizar
          cualquier tipo de construcci??n o mejora sin autorizaci??n de los
          PROMINENTES VENDEDORES, m??s de ninguna manera podr??n enajenar el
          inmueble en cuesti??n, hasta una vez que se libere la escritura p??blica
          a su favor.
        </p>
        <p className="text-justify  font-normal mt-1">
          QUINTA. - Ambas partes manifiestan que en la celebraci??n del presente
          no existe dolo, error, mala fe, violencia f??sica o moral, o cualquier
          otro vicio del consentimiento que pudiese afectar la eficacia del
          presente contrato.
        </p>
        <p className="text-justify  font-normal mt-1">
          SEXTA. - Para todo lo relacionado a la interpretaci??n y cumplimiento
          del presente contrato las partes se someten a las leyes y tribunales
          de la ciudad de Aguascalientes, Ags., renunciando a cualquier otro
          fuero que ahora o en el futuro les pudiere corresponder.
        </p>
        <p className="text-justify  font-normal mt-1">
          S??PTIMA. - As?? mismo la PROMINENTE COMPRADOR manifiesta que es su
          deseo dejar de beneficiario en caso de fallecimiento tanto del cr??dito
          como del lote al
          <span className="font-black text-sm"></span>{" "}
          <input
            type="text"
            id="beneficiario"
            name="beneficiario"
            className=" w-80 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-left"
            placeholder="Beneficiario"
            value={datos.BENEFICIARIO}
            disabled
            
          />.
        </p>
        <p className="text-justify  font-normal mt-1">
          El presente contrato se firma en la ciudad de Aguascalientes, a los  
          <input
            type="text"
            id="fecha"
            name="fecha"
            className=" w-60 mr-1 mt-1 placeholder-gray-500 rounded-md uppercase text-center"
            placeholder="Fecha Pago"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />, quedando un tanto en favor de cada
          una de las partes quienes manifiestan estar enterados del contenido
          del mismo.
        </p>
        <h3  className="text-center text-xl uppercase font-sans mt-52">Promitente Vendedor</h3>
        <p className="text-center font-normal uppercase mt-20">Oscar Fernando Ort??z Contreras</p>
        <h3  className="text-center text-xl uppercase font-sans mt-2">Promitente Comprador</h3>
        <p className="text-center font-normal uppercase mt-20">{usuario.nombre+" "+usuario.apellidoPaterno+" "+apellidoMaterno}</p>
       <div className="flex justify-between">
       <h5 className="text-left font-sans text-xl uppercase  mt-36 ">Testigo 1</h5>
        <h5 className="text-right font-sans text-xl uppercase  mt-36 ">Testigo 2</h5>
       </div>
       <p className="text-center font-normal mt-2">{"**"}Se le anexar?? al presente contrato copias simples de las credenciales de elector o alguna identificaci??n oficial.{"**"}</p>
        <div className="flex justify-center">
          {boton &&
           <button
           onClick={handleConsultar}
           type="button"
           className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
            p-2 mt-3 cursor-pointer hover:bg-blue-400 uppercase "
         >
           Buscar Datos Cliente
         </button>
          }
         
         {botonCrear &&  
         <button
              type="button"
              className="bg-blue-500 text-center  font-bold text-lg rounded-md shadow-md text-white 
              p-2 mt-3  ml-2 cursor-pointer hover:bg-blue-400 uppercase "
              onClick={handleCrearContrato}
            >
              Generar Contrato
            </button>}
        </div>
      </div>
    </>
  );
};
export default Contrato;