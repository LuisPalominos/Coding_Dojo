import React from "react";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import FormWrapper from "./components/FormWrapper";

function App() {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------



// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
