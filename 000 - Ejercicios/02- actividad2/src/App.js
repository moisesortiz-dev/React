import imagen0 from './imagen/rey_atanagildo.png';
import imagen1 from './imagen/rey_sisebuto.png';
import imagen2 from './imagen/rey_leogivildo.png'
import rey from './imagen/rey_incognito.png';
import { useRef } from 'react';
import './App.css';

function App() {

  let nombres = ["Atanagildo", "Leogivildo", "Sisebuto"];

  function cambiarImagen(e){
    if(e.target.src.includes("incognito")){
      e.target.style.visibility = "hidden";
    }else{
      e.target.src = rey;
    }

    e.target.parentNode.style.backgroundColor = "white";
  }

  function cambiarTexto(e) {
    if (e.target.innerHTML == "Visto") {
        e.target.innerHTML = "";
    } else {
      e.target.innerHTML = "Visto";
    }
  }
    return (
      <>

        <div className="contenedor">
          <div className="caja">
            <img onClick={cambiarImagen} src={imagen0}></img>
            <div onClick={cambiarTexto} className="nombre">{nombres[0]}</div>
          </div>
          <div className="caja">
            <img onClick={cambiarImagen} src={imagen1}></img>
            <div onClick={cambiarTexto} className="nombre">{nombres[1]}</div>
          </div>
          <div className="caja">
            <img onClick={cambiarImagen} src={imagen2}></img>
            <div onClick={cambiarTexto} className="nombre">{nombres[2]}</div>
          </div>
        </div>
      </>
    );
  }

  export default App;
