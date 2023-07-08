import React from "react";
import Cards from "./components/Cards";
const App=()=> {
  return (
    <div className="App">
      <Cards
        FirstName="Jane"
        LastName="Doe"
        age={45}
        hairColor="Black"
      />
      <Cards
        FirstName="John"
        LastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <Cards
        FirstName="Millard"
        LastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <Cards
        FirstName="Maria"
        LastName="Smith"
        age={62}
        hairColor="Brown"
      /> 
    </div>
  );
}

export default App;