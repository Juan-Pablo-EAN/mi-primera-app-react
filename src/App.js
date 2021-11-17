// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState(); //esto lo que hace es crear una variable (linea1) con un valor por defecto en los () de useState
  //setLinea1 es como una funcion que ayuda a cambiar el valor de linea1
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState();

  const onChangeLinea1 = evento1 => { //el parametro se recibe automaticamente sin enviarlo al llamar la funcion. El parametro es el evento
    setLinea1(evento1.target.value); //para obtener el valor del input con el evento se usa target.value
    //setLinea1 es la funcion que creamos para la variable linea1
  }

  const onChangeLinea2 = evento2 => {
    setLinea2(evento2.target.value);
  }

  const onChangeSelect = eventoS => {
    setImagen(eventoS.target.value);
  }

  const exportarImagen = () => {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("image/png");
      let link = document.createElement("a");
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
    //parra esto se uso html2canvas que convierte el html en imagen
    //el html2canvas se descarga dentro del proyecto con npm install --save html2canvas
  }

  let retorno =
    <div className="App">
      <select onChange={onChangeSelect}>
        <option>Elige un meme</option>
        <option value="fraid">Fraid</option>
        <option value="gato">Gato conduciendo</option>
        <option value="gato-malo">Gato malvado</option>
        <option value="smigol">Esmigol</option>
        <option value="inteligente">Inteligente ¿no?</option>
      </select>
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea superior" />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea inferior" />
      <br />


      <div className="contenedorMeme">
        <div id="meme">
          <span className="lineaS">{linea1}</span>
          <br />
          <span className="lineaI">{linea2}</span>
          <br />
          <img className="meme" src={"/img/" + imagen + ".jpg"} alt={"Meme de " + imagen} />
        </div>
      </div>
      <br />
      <button onClick={exportarImagen}>Exportar</button>
    </div>;

  return (
    retorno
  );
}

export default App;
