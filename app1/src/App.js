import logo from './logo.svg';
import './App.css';
import Welcome from './lesson1/componenta/Welcome'
import DisplayPic from './lesson2/componenta/DisplayPic'; 
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Welcome name="chani" age='19' ></Welcome>
        <DisplayPic></DisplayPic>
      {/* </header> */}
    </div>
  );
}

export default App;
