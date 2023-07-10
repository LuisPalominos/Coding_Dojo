import React from "react";
import Cartas from "./components/Cartas";
const App=()=> {
  return (
    <div className="App">
      <Cartas
        FirstName="Jane"
        LastName="Doe"
        age={45}
        hairColor="Black"
      />
      <Cartas
        FirstName="John"
        LastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <Cartas
        FirstName="Millard"
        LastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <Cartas
        FirstName="Maria"
        LastName="Smith"
        age={62}
        hairColor="Brown"
      /> 
    </div>
  );
}

export default App;