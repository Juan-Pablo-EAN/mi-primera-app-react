import logo from './logo.svg';
import './App.css';

function App() {

  var saludo = "Hola, soy Juan Pablo";
  var texto = "Esta es mi primera app en React";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{saludo}</h1>
        <p>f
          {texto}
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
    </div>
  );
}

export default App;
