import React from "react";
import Cards from "./components/Cards";
import Button from "./components/Button";
const App=()=> {
  return (
    <div className="App">
      <Cards
        FirstName="Jane"
        LastName="Doe"
        age={45}
        hairColor="Black"
      />
      <Button/>
      <hr className="w-25 mx-auto"/>
      <Cards
        FirstName="John"
        LastName="Smith"
        age={88}
        hairColor="Brown"
      />
      <Button/>
      <hr className="w-25 mx-auto"/>
      <Cards
        FirstName="Millard"
        LastName="Fillmore"
        age={50}
        hairColor="Brown"
      />
      <Button/>
      <hr className="w-25 mx-auto"/>
      <Cards
        FirstName="Maria"
        LastName="Smith"
        age={62}
        hairColor="Brown"
      /> 
      <Button/>
    </div>
  );
}

export default App;