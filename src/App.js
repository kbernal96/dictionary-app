import './App.css';
import Dictionary from './Dictionary';
import logo from "./logo/logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo" alt="logo"/>
        <Dictionary defaultKeyword="flibbertigibbet"/>
      </div>
      <footer>
        Open-source code by 
        <a className="coder" href="https://github.com/kbernal96/dictionary-app" target="_blank" rel="noreferrer"> Karla Bernal</a>
      </footer>

    </div>
  );
}

export default App;
