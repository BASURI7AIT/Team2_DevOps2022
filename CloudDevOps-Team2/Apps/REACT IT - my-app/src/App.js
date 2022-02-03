import logo from './logo.svg';
import logo2 from './logo2.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2} className="App-logo" alt="logo" />
        <p>
          Editen <code>src/App.js</code> y guarden para testear!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Bienvenidos a EducacionIT!</p>
          <p>Y a la Carrera CloudDevOps!!</p>
          <p> Espero aprendan mucho y disfruten aprendiendo!</p>
            <p>Los veo en Clase!!</p>
         <p> Go Devops!!</p>
         <p>gino.luciano.rojo@..</p>
        </a>
      </header>
    </div>
  );
}

export default App;
