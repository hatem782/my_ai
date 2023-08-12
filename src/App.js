import logo from "./logo.svg";
import "./App.css";
import Speech from "./Speech/Speech";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Speech />
      </header>
    </div>
  );
}

export default App;
