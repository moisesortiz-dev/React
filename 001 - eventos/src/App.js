import imagen0 from './images/rey_atanagildo.png';
import imagen1 from './images/rey_sisebuto.png'
import {useRef} from 'react';
import './App.css';

function App() {

  const cambio = 23.16;
  const refCaja = useRef();

  //Acceder a la propiedad de una caja y multiplicar el valor que tuviera dicha caja 
  function incrementar(e){
   e.target.innerHTML = Number(e.target.innerHTML)+ 1; 
   
  }

  //Funcion para recoger el valor de una caja y multiplicarlo
  function convertir(){
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  }
//Variante en funcion flecha
/*
  const cambiar = () =>{
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio;
  } 
*/

  //Cambiar la ruta de una imagen a otra
  function cambiar(j){
    j.target.src = imagen1;
  }

  /*Variante en funcion flecha
  const cambiar = (j) =>{
    j.target.src = imagen1;
  }
  */

  //Mostrar de un input a una caja
  function lectura(e){
    refCaja.current.innerHTML = e.target.value;
  }

  /*Variante en funcion flecha
  const lectura = (e) =>{
    refCaja.current.innerHTML = e.target.value;
  }
*/
  return (
    <>
      <div ref={refCaja} className="caja" onClick={incrementar}>1</div>
      <button onClick={convertir} >ACEPTAR</button>
      <div><img onClick={cambiar} src={imagen0}></img></div>
      <input onChange={lectura} className="campo"></input>

    </>
    
  );
}

export default App;
