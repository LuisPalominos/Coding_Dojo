import React, {useState} from "react";
import Button from "./components/Button";
import Box from "./components/Box";

function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
  const [state, setState] = useState({
    tab1:{
      name:"Tab 1",
      push: false
    },
    tab2:{
      name:"Tab 2",
      push: false
    },
    tab3:{
      name:"Tab 3",
      push: false
    }
  });


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
  return (
    <div className="App">
      <Button inputs={state} setInputs={setState}/>
      <Box data={state}/>
    </div>
  );
}

export default App;
