import React, {useState} from 'react'
import Form from './components/Form';
import Tarea from './components/Tarea';



function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------

const [state, setState] = useState([]);

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
  return (
    <div className="App container text-center">
      <h1>To Do List:</h1>
      <Form  inputs={state} setInputs={setState}/>
      <Tarea caja={state}/>
    </div>
  );
}

export default App;