// src/App.js
import './App.css';
import EventList from './component/EventList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>منصة Eventoo</h1>
        <EventList />
      </header>
    </div>
  );
}

export default App;