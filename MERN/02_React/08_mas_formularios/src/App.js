import React, {useState} from 'react'
import Formulario from './components/Formulario'
import Data from './components/Data'

function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------

// Your code...
// ---------------------------------------------
// III) JSX
// ---------------------------------------------
  return (
    <div className="App">
      <Formulario inputs={state} setInputs={setState}/>
      <Data data={state}/>
    </div>
  );
}

export default App;
