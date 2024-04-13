import logo from './logo.svg';
import './App.css';
import Greeting from './pure/greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*En jsx el comentario se pone entre llaves*/}
        <Greeting name="Moisés">

        </Greeting>
      </header>
    </div>
  );
}

export default App;
