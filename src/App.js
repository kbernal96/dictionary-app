import './App.css';
import Dictionary from './Dictionary';
import logo from "./logo/dictionaryLogo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={logo} className="logo"/>
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
