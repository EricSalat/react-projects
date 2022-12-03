import './App.css';
import { useState } from "react";
import data from './data';
import List from './List';

function App() {

  const [peopleDB, setPeople] = useState(data)

  return (
    <div className="App">
    <main>
      <section className="container">
        <h3>{peopleDB.length} cumpleaños este mes.</h3>
        <List people={peopleDB} />
        <button onClick={() => console.log("Me has hecho clic")}>Borrar todos</button>

      </section>
    </main>
    </div>
  );
}

export default App;
