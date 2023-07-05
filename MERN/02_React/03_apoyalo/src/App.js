import React from "react";
import PersonCard from "./components/PersonCard.js";

function App() {
  return (
    <div className="App">
        <PersonCard
        FirstName={", Jane"}
        LastName={"Doe"}
        age={"Age: 45"}
        hairColor={"Hair Color: Black"}
      />
      <hr />
      <PersonCard
        FirstName={", John"}
        LastName={"Smith"}
        age={"Age: 88"}
        hairColor={"Hair Color: Brown"}
      />
      <hr />
      <PersonCard
        FirstName={", Millard"}
        LastName={"Fillmore"}
        age={"Age: 50"}
        hairColor={"Hair Color: Brown"}
      />
      <hr />
      <PersonCard
        FirstName={", Maria"}
        LastName={"Smith"}
        age={"Age: 62"}
        hairColor={"Hair Color: Brown"}
      />
    </div>
  );
}

export default App;
