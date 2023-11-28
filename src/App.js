import logo from './logo.svg';
import './App.css';

function App() {
  const environ = process.env.REACT_APP_ENVIRONMENT || 'development';

  return (
    <div className="App">
      <header className="App-header">
          <h1>Dakshitha</h1>
          <h2>Environment : {environ}</h2>
      </header>
    </div>
  );
}

export default App;
