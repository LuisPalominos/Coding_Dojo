import React from "react";
import PaginaInicio from "./components/PaginaInicio";
import PaginaEspecifica from "./components/PaginaEspecifica";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<PaginaInicio />} />
          <Route path="/:id" element={<PaginaEspecifica />} />
      </Routes>
    </div>
  );
}

export default App;
