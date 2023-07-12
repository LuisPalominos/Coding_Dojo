import React, {useState} from 'react'
import Form from './components/Form';
import Box from './components/Box';

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
    <div className="App">
      <Form  inputs={state} setInputs={setState}/>
      <Box caja={state}/>
    </div>
  );
}

export default App;
