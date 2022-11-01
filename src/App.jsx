import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <Navbar />
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
        <button className='btn btn-outline-light'>
          <i className="bi bi-controller me-2"></i>Learn React
        </button>
      </a>
    </header>
  </div>
)

export default App;
