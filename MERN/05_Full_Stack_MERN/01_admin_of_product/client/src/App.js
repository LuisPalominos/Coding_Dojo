import React from "react";
import Main from "./view/Main";
import SpecificProduct from "./view/SpecificProduct";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:id" element={<SpecificProduct />} />
      </Routes>
    </div>
  );
}

export default App;
