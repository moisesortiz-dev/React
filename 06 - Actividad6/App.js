//import Actividad1 from './Actividad1';
import Actividad2 from './Actividad2';
import './App.css';

function App() {

  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3
    },
    {
      nombre: "Ataúfo",
      reinado: 5,
      vacasComidas: 16
    },
    {
      nombre: "Leogivildo",
      reinado: 18,
      vacasComidas: 3
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13
    },
    {
      nombre: "Teodorico",
      reinado:33,
      vacasComidas: 12
    },
  ]

  return (
    <>
      <h1> Actividad 1</h1>
      {/*<Actividad1 reyes={reyes}/>*/}
      <Actividad2 reyes={reyes}/>
    </>
  );
}

export default App;
