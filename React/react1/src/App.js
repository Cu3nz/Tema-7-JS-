import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador.jsx';
import ImagenHover from './components/Imagen.jsx';
import añadirUsers from './components/Formulario.jsx';




function App() {
  return (
    <>
    <div>
      {/* Utiliza el componente Contador aquí */}
      <Contador />

      <ImagenHover/> {/* Importamos la funcion imagen */}

      <añadirUsers/>

    </div>
    </>
  );
}

export default App;

    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>     */}