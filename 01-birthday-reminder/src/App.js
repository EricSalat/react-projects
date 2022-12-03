import './App.css';
import { useState } from "react";
import data from './data';
import List from './List';
import logo from './assets/img/logo.png';

function App() {

  const [peopleDB, setPeople] = useState(data)

  return (
    <div className="App">
    <main>
      <section className="container">
        <h3>Cumpleaños de este mes</h3>
        <List people={peopleDB} />
        <button onClick={() => setPeople([])}>Borrar todos</button>

      </section>
    </main>
    </div>
  );
}

export default App;
