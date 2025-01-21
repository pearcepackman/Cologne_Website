
import './App.css';
import { NavBar } from './components/navbar';
import { HomePage } from './pages/home';

function App() {
  return (
    /*<Route>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Routes>
            <Route path = "/contact" element = { ContactPage} />
          <a
            className="App-link"
            
            target="_blank"
            rel="noopener noreferrer"
          >
            Test Page
          </a>
          </Routes>
        </header>
      </div>
    </Route>*/
    <div className = "App">
      <HomePage />

    </div>
  );
}

export default App;
