import './App.css';
import Form from "./Form";
import ShiftPoints from "./components/ShiftPoints";

function App() {
  return (
    <div className="p-10">
      <header className="App-header">
        Leadfoot Gearbox Lab
      </header>
      <div>
        <Form/>
          <ShiftPoints/>
      </div>
    </div>
  );
}

export default App;
