import './App.css';
import Dictionary from './Dictionary';
import logo from "./logo/dictionaryLogo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo" alt="logo"/>
        <Dictionary defaultKeyword="flibbertigibbet"/>
      </div>
    </div>
  );
}

export default App;
