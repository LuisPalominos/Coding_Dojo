import React from "react";
import Main from "./view/Main";
import SpecificProduct from "./view/SpecificProduct";
import Updateproduct from "./view/UpdateProduct";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/:id" element={<SpecificProduct />} />
        <Route path="/:id/edit" element={<Updateproduct />} />
      </Routes>
    </div>
  );
}

export default App;
